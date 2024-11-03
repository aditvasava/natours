const express = require('express');
const multer = require('multer');
const userController = require('../controllers/userController');
const authenticationController = require('../controllers/authenticationController');

const {
  getAllUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  updateMe,
  deleteMe,
  deleteAll,
  getMe,
  uploadUserPhoto,
  resizeUserImage,
} = userController;

const { signUp, login, logout, forgotPassword, resetPassword, updatePassword, protect, restrictTo } =
  authenticationController;

const router = express.Router();

router.post('/signup', signUp);
router.post('/login', login);
router.get('/logout', logout);
router.post('/forgotPassword', forgotPassword);
router.patch('/resetPassword/:token', resetPassword);

router.use(protect);

router.get('/me', getMe, getUser);

router.patch('/updateMe', uploadUserPhoto, resizeUserImage, updateMe);

router.patch('/updateMyPassword', updatePassword);

router.delete('/deleteMe', deleteMe);

router.use(restrictTo('admin'));

router.post('/', createUser);

router.get('/:id', getUser);
router.get('/', getAllUsers);

router.patch('/:id', updateUser);

router.delete('/deleteAll', deleteAll);
router.delete('/:id', deleteUser);

module.exports = router;
