const mongoose = require('mongoose');
const Schema = mongoose.Schema

const reportSchema = new Schema(
    {
        description: {
            type: String,
            required: [true, 'Description can not be empty!']
        },
        createdAt: {
            type: Date,
            default: Date.now
        },
        contract: {
            type: mongoose.Schema.ObjectId,
            ref: 'Contract'
        },

    },
    {
        toJSON: { virtuals: true },
        toObject: { virtuals: true }
    }
);

reportSchema.pre(/^find/, function (next) {
    this.populate({
        path: 'contract',
        select: ['tasker', 'user']
    });
    next();
});

const ReportModel = mongoose.model('Report', reportSchema)
module.exports = ReportModel