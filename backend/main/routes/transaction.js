const express = require('express')
const router = express.Router()

const authController = require('../controllers/authController');
const transactionController = require('../controllers/transactionController')

router.use(authController.protect, authController.isLoggedIn);

router.route('/')
    .get(transactionController.getAllTransactionHistory)
    .post(transactionController.createTransaction);


module.exports = router