const mongoose = require('mongoose');
const Schema = mongoose.Schema

const transactionSchema = new Schema({
    sender: {
        type: mongoose.Schema.ObjectId,
        ref: 'User'
    },
    recepient: {
        type: mongoose.Schema.ObjectId,
        ref: 'User'
    },
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User'
    },
    amount: {
        type: Number,
        required: true,
        validate: {
            validator: function (v) {
                return /^\d+(?:\.\d{1,2})?$/.test(v);
            },
            message: 'Invalid number'
        }
    },
    type: {
        type: String,
        required: true,
        enum: ['deposit', 'withdraw', 'transfer']
    },
    description: {
        type: String,
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
});

transactionSchema.pre(/^find/, function (next) {
    this.populate({
        path: 'sender',
        select: ['firstname', 'lastname', 'wallet']
    }).populate({
        path: 'recepient',
        select: ['firstname', 'lastname', 'wallet']
    }).populate({
        path: 'user',
        select: ['firstname', 'lastname', 'wallet']
    });

    next();
});


// w ถอน
// d ฝาก
// t โอน

const transactionModel = mongoose.model('Transaction', transactionSchema)
module.exports = transactionModel