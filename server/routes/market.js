const express = require('express');
const router = express.Router();
const { getMarketItems, createMarketItem, updateMarketItemStatus } = require('../controllers/market');

router.get('/', getMarketItems);
router.post('/', createMarketItem);
router.patch('/:id/status', updateMarketItemStatus);

module.exports = router;
