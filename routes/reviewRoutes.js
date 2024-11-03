const express = require('express');
const router = express.Router({ mergeParams: true });

const authenticationController = require('../controllers/authenticationController');
const reviewController = require('../controllers/reviewController');

const { getReview, createReview, getAllReviews, deleteReview, updateReview, SetTourAndUserID } = reviewController;
const { protect, restrictTo } = authenticationController;

router.use(protect);

router.get('/:id', getReview);
router.get('/', getAllReviews);

router.post('/', protect, restrictTo('user'), SetTourAndUserID, createReview);

router.patch('/:id', restrictTo('user', 'admin'), updateReview);

router.delete('/:id', restrictTo('user', 'admin'), deleteReview);

module.exports = router;
