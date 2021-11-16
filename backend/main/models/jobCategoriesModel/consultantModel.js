const mongoose = require('mongoose');
const Schema = mongoose.Schema

const consultantSchema = new Schema({
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: true
    },
    ratingsAverage: {
        type: Number,
        default: 4.5,
        min: [1, 'Rating must be above 1.0'],
        max: [5, 'Rating must be below 5.0'],
        set: val => Math.round(val * 10) / 10 // 4.666666, 46.6666, 47, 4.7
    },
    ratingsQuantity: {
        type: Number,
        default: 0
    },
    description: String,
    history: [String],
    price: {
        type: Number,
        required: [true, 'A tour must have a price']
    },
    locations: {
        type: String,
        required: [true, 'Please provide your locations']
    },
    subCategories: {
        type: [String],
        require: true,
        //enum: ['Marketing', 'Legal', 'Financial-planning', 'Horoscope', 'Tutoring', 'Feng-shui', 'Psychologist']
    }
},
    {
        toJSON: { virtuals: true },
        toObject: { virtuals: true }
    }
)

consultantSchema.pre(/^find/, function (next) {
    this.populate({
        path: 'user',
        select: ['firstname', 'lastname']
    })

    next();
});

const ConsultantModel = mongoose.model('Consultant', consultantSchema)
module.exports = ConsultantModel