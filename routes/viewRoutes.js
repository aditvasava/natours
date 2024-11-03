const express = require('express');
const viewController = require('../controllers/viewController');
const { isUserLoggedIn, protect } = require('../controllers/authenticationController');
const { createBookingCheckout } = require('../controllers/bookingController');
const { getOverview, getTour, login, getAccount, getBookings } = viewController;

const router = express.Router();

router.get('/', createBookingCheckout, isUserLoggedIn, getOverview);
router.get('/tour/:tourName', isUserLoggedIn, getTour);
router.get('/login', isUserLoggedIn, login);
router.get('/me', protect, getAccount);
router.get('/my-tours', protect, getBookings);

module.exports = router;
