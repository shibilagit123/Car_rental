import mongoose from "mongoose";

const carSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      minLength: 3,
      maxLength: 30,
      unique: true,
    },
    model: {
      type: String,
      required: true,
      minLength: 20,
      maxLength: 300,
    },
    oil_type: {
      type: String,
      enum: ["Petrol", "Deisel"],
      required: true,
      minLength: 20,
      maxLength: 300,
    },
    description: {
      type: String,
      required: true,
      minLength: 20,
      maxLength: 300,
    },
    
    price: {
      type: Number,
      required: true,
    },
    rent_price: {
      type: Number,
      required: true,
    },
    duration: {
        type: String,
        required: true,
    },
    image: {
      type: String,
       default: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaLGtEd0MJro4X9wDmT2vrvLT-HjKkyyWVmg&s",
    },
    brand: { type: mongoose.Types.ObjectId, ref: "brand" },
    carowner: { type: mongoose.Types.ObjectId, ref: "carowner" },
  },
  { timestamps: true }
);

export const Car = mongoose.model("Car", carSchema);
