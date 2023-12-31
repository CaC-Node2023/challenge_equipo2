const express = require('express');
const router = express.Router();

const shopControllers = require('../controllers/shopControllers');

router.get('/', shopControllers.shop);
router.get('/item/:id', shopControllers.item);
router.post('/item/:id/add', shopControllers.addItemToCart);
router.get('/cart', shopControllers.cart);
router.post('/cart', shopControllers.checkout);
router.get('/contact', shopControllers.contact);
router.post('/contact', shopControllers.submitInquiry);

module.exports = router;
