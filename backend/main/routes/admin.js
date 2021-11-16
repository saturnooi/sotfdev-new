const express = require('express')
const router = express.Router()

const userController = require('./../controllers/userController');
const authController = require('./../controllers/authController');
const contractController = require('./../controllers/contractController');
const reportController = require('./../controllers/reportController');



router
    .route('/users')
    .get(authController.restrictTo('admin'), userController.getAllUsers);

// ใช้กับ /user ปกติได้
// router
//     .route('/users/:id')
//     .get(userController.getUser)

router
    .route('/contracts')
    .get(authController.restrictTo('admin'), contractController.getAllContracts);

// ใช้กับ /contract ปกติได้
// router
//     .route('/contracts/:id')
//     .get(contractController.getContract)

router
    .route('/reports')
    .get(authController.restrictTo('admin'), reportController.getAllReport);

// router
//     .route('/reports/:contractId')
//     .get(reportController.getReport)



module.exports = router