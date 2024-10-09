import { Schema, model } from "mongoose";

const cartSchema = new Schema(
    {
        userId: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        car: [
            {
                carId: {
                    type: Schema.Types.ObjectId,
                    ref: "Course",
                    required: true,
                },
                days: {
                    type: Number,
                    required: true,
                },
                time: {
                    type: Number,
                    required: true,
                },
                price: {
                    type: Number,
                    required: true,
                },
            },
        ],
        totalPrice: {
            type: Number,
            required: true,
            default: 0,
        },
    },
    { timestamps: true }
);

cartSchema.methods.calculateTotalPrice = function () {
    this.totalPrice = this.courses.reduce((total, course) => total + course.price, 0);
};

export const Cart = model("Cart", cartSchema);


