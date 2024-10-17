import { cloudinaryInstance } from "../config/cloudinaryConfig.js";
import { Carowner } from "../models/carownerModel.js";
// import { handleImageUpload } from "../utils/cloudinary.js";

export const findAllcarowners = async (req, res, next) => {
    try {
        const carownerList = await Carowner.find();

        res.json({ message: "carowner list fetched", data: carownerList });
    } catch (error) {
        console.log(error);
        res.status(error.statusCode || 500).json(error.message || "Internal server error");
    }
};

export const fetchcarownerDetails = async (req, res, next) => {
    try {
        const { carownerId } = req.params;

        const carownerDetails = await Carowner.findOne({ _id: carownerId });

        res.json({ message: "carowner details fetched", data: carownerDetails });
    } catch (error) {
        console.log(error);
        res.status(error.statusCode || 500).json(error.message || "Internal server error");
    }
};

export const createcarowner = async (req, res, next) => {
    try {
        let imageUrl;
        const { name, email,phone,address } = req.body;
        // console.log("image====", req.image);

        // if (req.image) {
        //     const cloudinaryRes = await cloudinaryInstance.uploader.upload(req.image.path);
        //     // imageUrl= cloudinaryRes.url;
        //     // imageUrl = await handleImageUpload(req.image.path)
        // }

        // console.log(imageUrl,'====imageUrl');
        
        const newcarowner = new Carowner({ name,email,phone,address });
        await newcarowner.save();

        res.json({ message: "carowner created successfully", data: newcarowner });
    } catch (error) {
        console.log(error);
        res.status(error.statusCode || 500).json(error.message || "Internal server error");
    }
};


export const updatecarowner = async (req, res, next) => {
    try {

        const {carownerId} = req.params;
        const { name, email,phone,address } = req.body;
        

        const iscarownerExist = await Carowner.findById(carownerId);
        if(!iscarownerExist){
           return res.status(404).json({message:"carowner not found"})
        }

        // console.log("image====", req.image);

        // if (req.image) {
        //     const cloudinaryRes = await cloudinaryInstance.uploader.upload(req.image.path);
        //     imageUrl= cloudinaryRes.url;
        //     // imageUrl = await handleImageUpload(req.image.path)
        // }

        // console.log(imageUrl,'====imageUrl');

        const carownerUpdated = await Carowner.findByIdAndUpdate(carownerId,{ name, email,phone,address},{new:true})

        res.json({ message: "carowner updated successfully", data: carownerUpdated });
    } catch (error) {
        console.log(error);
        res.status(error.statusCode || 500).json(error.message || "Internal server error");
    }
};


export const deletecarowner = async (req, res, next) => {
    try {

        const {carownerId} = req.params;
        const carownerDetails = await Carowner.findByIdAndDelete(carownerId)

        if(!carownerDetails){
            return res.status(404).json({message:"carowner not found"})
        }

        res.json({ message: "carowner deleted successfully" });
    } catch (error) {
        console.log(error);
        res.status(error.statusCode || 500).json(error.message || "Internal server error");
    }
};


