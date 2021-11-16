const express = require('express');
const router = express.Router();

const userController = require('./../controllers/userController');
const authController = require('./../controllers/authController');
const viewsController = require('./../controllers/viewsController');
const contractController = require('./../controllers/contractController');

router
    .route('/signup')
    .post(authController.signup);
router
    .route('/login')
    .get(viewsController.getLoginForm)
    .post(authController.login);

//router.route('/users').get(userController.getAllUsers);
router.get('/logout', authController.logout);

router.post('/forgotPassword', authController.forgotPassword);
router.patch('/resetPassword/:token', authController.resetPassword);

// Protect all routes after this middleware
router.use(authController.protect);

router.patch('/updateMyPassword', authController.updatePassword);
router.get('/me', userController.getMe, userController.getUser);
router
    .route('/mycontract')
    .get(contractController.getMyAllContracts)
//     .post(contractController.createContract);

router.patch('/updateMe',
    userController.uploadUserPhoto,
    userController.resizeUserPhoto,
    userController.updateMe
);
router.delete('/deleteMe', userController.deleteMe);

module.exports = router