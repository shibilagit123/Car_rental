import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    car: [
        {
    carId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Car",
        required: true,
    },
    rating: {
        type: Number,
        required: true,
        min: 1,
        max: 5,
    },
    comment: {
        type: String,
        trim: true,
        maxlength: 500,
    },
},
    ],
    createdAt: {
        type: Date,
        default: Date.now,
    },

});

export const Review = mongoose.model("Review",reviewSchema)