const prisma = require('../prismaClient');

exports.getMarketItems = async (req, res) => {
  try {
    const items = await prisma.marketItem.findMany({
      orderBy: { createdAt: 'desc' }
    });
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createMarketItem = async (req, res) => {
  try {
    const { title, description, price } = req.body;
    const item = await prisma.marketItem.create({
      data: {
        title,
        description,
        price: parseFloat(price)
      }
    });
    res.status(201).json(item);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateMarketItemStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const item = await prisma.marketItem.update({
      where: { id: Number(id) },
      data: { status }
    });
    res.json(item);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
