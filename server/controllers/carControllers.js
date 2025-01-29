import { cloudinaryInstance } from "../config/cloudinaryConfig.js";
import { Car } from "../models/carModel.js";
import mongoose from "mongoose";
// import { handleImageUpload } from "../utils/cloudinary.js";


export const findAllcars = async (req, res, next) => {
    try {
        const carList = await Car.find();
    
        res.json({ message: "car list fetched", data: carList });
        
    } catch (error) {
        console.log(error);
        res.status(error.statusCode || 500).json(error.message || "Internal server error");
    }
};

export const fetchcarsDetails = async (req, res, next) => {
    try {
        const { carId } = req.params;
        // const cId =req.params;
        const cId = typeof params === 'object' ? params.id : params;
        if (!mongoose.Types.ObjectId.isValid(cId)) {
            throw new Error('Invalid ID format');
        }
        const carDetails = await Car.findOne({ _id:(cId)});
        console.log(carDetails);

        res.json({ message: "car details fetched", data: carDetails });
    } catch (error) {
        console.log(error);
        res.status(error.statusCode || 500).json(error.message || "Internal server error");
    }
};

export const createCar = async (req, res, next) => {
    try {
        let imageUrl;
        const { title,model,oil_type, description, duration,price,rent_price,seat,milage,gear,image } = req.body;
        // console.log("image====", req.image);

        if (req.image) {
            const cloudinaryRes = await cloudinaryInstance.uploader.upload(req.image.path);
            imageUrl= cloudinaryRes.url;
            // imageUrl = await handleImageUpload(req.image.path)
        }

        console.log(imageUrl,'====imageUrl');
        
        const newcar = new Car({ title,model,oil_type, description, duration, price,rent_price,seat,milage,gear, imageUrl });
        await newcar.save();

        res.json({ message: "car created successfully", data: newcar });
    } catch (error) {
        console.log(error);
        res.status(error.statusCode || 500).json(error.message || "Internal server error");
    }
};


export const updateCar = async (req, res, next) => {
    try {

        const {carId} = req.params;
        const { title, description, duration, price, image } = req.body;
        let imageUrl;

        const isCareExist = await Car.findById(carId);
        if(!isCareExist){
           return res.status(404).json({message:"car not found"})
        }

        console.log("image====", req.image);

        if (req.image) {
            const cloudinaryRes = await cloudinaryInstance.uploader.upload(req.image.path);
            imageUrl= cloudinaryRes.url;
            // imageUrl = await handleImageUpload(req.image.path)
        }

        console.log(imageUrl,'====imageUrl');

        const carUpdated = await Car.findByIdAndUpdate(carId,{ title, description, duration, price,seat,milage,gear, image:imageUrl },{new:true})

        res.json({ message: "car updated successfully", data: carUpdated });
    } catch (error) {
        console.log(error);
        res.status(error.statusCode || 500).json(error.message || "Internal server error");
    }
};


export const deletecar = async (req, res, next) => {
    try {

        const {carId} = req.params;
        const carDetails = await Car.findByIdAndDelete(carId)

        if(!carDetails){
            return res.status(404).json({message:"car not found"})
        }

        res.json({ message: "car deleted successfully" });
    } catch (error) {
        console.log(error);
        res.status(error.statusCode || 500).json(error.message || "Internal server error");
    }
};


