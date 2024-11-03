const express = require('express');
const router = express.Router();

const authenticationController = require('../controllers/authenticationController');
const { getCheckoutSession } = require('../controllers/bookingController');
const { protect } = authenticationController;

router.get('/checkout-session/:tourId', protect, getCheckoutSession);

module.exports = router;
