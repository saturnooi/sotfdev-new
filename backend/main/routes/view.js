const express = require('express')
const router = express.Router()
const authController = require('../controllers/authController');
const userController = require('../controllers/userController');
const viewController = require('../controllers/viewsController');

router.use(authController.isLoggedIn);

router
    .route('/')
    // .get(viewController.aliasTopTasker, viewController.getindex);
    .get(viewController.getindex);

module.exports = router