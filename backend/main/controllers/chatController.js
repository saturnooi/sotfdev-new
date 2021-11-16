// const io = require('socket.io');
const APIFeatures = require('../utils/apiFeatures');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

const Chat = require('../models/chatModel');
const User = require('../models/userModel');

exports.getChat = catchAsync(async (req, res, next) => {
    const allchat = await Chat.findById(req.params.id);
    // console.log(chat.message);
    global.username = req.user.firstname; // Socket.io
    global.roomId = req.params.id;
    res.status(200).render('chat', {
        // res.status(200).json({
        title: 'Chat',
        status: 'success',
        allchat
    });
});

exports.getAllChat = catchAsync(async (req, res, next) => {
    const allchat = await Chat.findById("61780dd0b5ec5cd90efa8c3e");
    global.username = await req.user.firstname;
    res.status(200).render('chat', {
        title: 'Chat',
        status: 'success',
        allchat,
    });
});

exports.createChat = catchAsync(async (req, res, next) => {
    const chat = await Chat.create({ user: req.user.id, tasker: req.body.tasker });
    try {
        if (chat) {
            res.status(201).json({
                status: 'success',
                url: `http://127.0.0.1:3000/chat/${chat.id}`,
            });
        }
    }
    catch (err) {
        const chat = await Chat.create(req.body);
        res.status(201).json({
            status: 'success',
            data: {
                chat,
            },
        });
    }
});

// exports.sendMessage = catchAsync(async (req, res, next) => {
//     const newMessage = await Chat.findOneAndUpdate(
//         { id: req.params.id },
//         {
//             $push: {
//                 message: {
//                     sender: req.user.firstname,
//                     message: req.body.message,
//                 },
//             },
//         }
//     );
//     res.status(201).json({
//         status: 'success',
//         data: {
//             newMessage,
//         },
//     });
// });
