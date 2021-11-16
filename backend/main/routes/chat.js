const express = require('express');
const router = express.Router();

const authController = require('../controllers/authController');
const chatController = require('../controllers/chatController');
const contractController = require('../controllers/contractController');
// const viewController = require('../controllers/viewsController');

router.use(authController.protect, authController.isLoggedIn);

router.route('/').get(chatController.getAllChat).post(chatController.createChat);

router.route('/:id').get(chatController.getChat).post(contractController.createContract, contractController.acceptContract);

// .get(viewController.getChat, chatController.getAllChat);
// .get(viewController.getChat);

module.exports = router;
