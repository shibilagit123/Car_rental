import mongoose from "mongoose";

const carownerSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
    },
    { timestamps: true }
);

export const Carowner = mongoose.model("Carowner",carownerSchema);
