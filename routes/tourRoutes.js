const express = require('express');
const tourController = require('../controllers/tourController');
const reviewRouter = require('../routes/reviewRoutes');
const authenticationController = require('../controllers/authenticationController');
const {
  getAllTours,
  getTour,
  createTour,
  updateTour,
  deleteTour,
  aliasTopTours,
  checkId,
  checkBody,
  getTourStats,
  getMonthlyPlan,
  getToursWithin,
  getDistances,
  uploadTourImages,
  resizeTourImages,
} = tourController;

const { protect, restrictTo } = authenticationController;

const router = express.Router();

router.use('/:tourId/reviews', reviewRouter);

router.get('/', getAllTours);

router.get('/top-5-cheap', aliasTopTours, getAllTours);

router.get('/tour-stats', getTourStats);

router.get('/monthly-plan/:year', protect, restrictTo('admin', 'lead-guide', 'guide'), getMonthlyPlan);

router.get('/tours-within/:distance/center/:latlng/unit/:unit', getToursWithin);

router.get('/distances/:latlng/unit/:unit', getDistances);

router.get('/:id', getTour);

router.post('/', protect, restrictTo('admin', 'lead-guide'), createTour);

router.patch('/:id', protect, restrictTo('admin', 'lead-guide'), uploadTourImages, resizeTourImages, updateTour);

router.delete('/:id', protect, restrictTo('admin', 'lead-guide'), deleteTour);

module.exports = router;
