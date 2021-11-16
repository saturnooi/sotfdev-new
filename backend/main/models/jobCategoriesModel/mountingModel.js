const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mountingSchema = new Schema(
    {
        user: {
            type: mongoose.Schema.ObjectId,
            ref: 'User',
            required: true,
        },
        ratingsAverage: {
            type: Number,
            default: 4.5,
            min: [1, 'Rating must be above 1.0'],
            max: [5, 'Rating must be below 5.0'],
            set: (val) => Math.round(val * 10) / 10, // 4.666666, 46.6666, 47, 4.7
        },
        ratingsQuantity: {
            type: Number,
            default: 0,
        },
        review: [
            {
                userReview: {
                    type: mongoose.Schema.ObjectId,
                    ref: 'User',
                },
                review: String,
            },
        ],
        description: String,
        history: [String],
        price: {
            type: Number,
            required: [true, 'A tour must have a price'],
        },
        locations: {
            type: String,
            required: [true, 'Please provide your locations'],
        },
        subCategories: {
            type: [String],
            require: true,
            //enum: ["TV Mounting", "Hanging Curtains & Installing Blinds", "Mounting solar", "Door & Window Installation", "Light Installation"]
        },
    },
    {
        toJSON: { virtuals: true },
        toObject: { virtuals: true },
    }
);

mountingSchema.pre(/^find/, function (next) {
    this.populate({
        path: 'user',
        select: ['firstname', 'lastname', 'photo'],
    })
        .populate({
            path: 'review.userReview',
            select: ['firstname', 'lastname', 'photo'],
        })
        .populate({
            path: 'history.contract',
            select: ['description', 'price'],
        });

    next();
});

const MountingModel = mongoose.model('Mounting', mountingSchema);
module.exports = MountingModel;
