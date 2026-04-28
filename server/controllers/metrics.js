const prisma = require('../prismaClient');

exports.getMetrics = async (req, res) => {
  try {
    const totalPosts = await prisma.post.count();
    const totalIssues = await prisma.issue.count();
    const totalEvents = await prisma.event.count();
    const activeMarketItems = await prisma.marketItem.count({
      where: { status: 'AVAILABLE' }
    });
    
    // Example activity score (simple calculation)
    const activityScore = totalPosts * 5 + totalIssues * 10 + totalEvents * 15 + activeMarketItems * 10;

    res.json({
      totalPosts,
      totalIssues,
      totalEvents,
      activeMarketItems,
      activityScore
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch metrics' });
  }
};
