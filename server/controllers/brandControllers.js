import { cloudinaryInstance } from "../config/cloudinaryConfig.js";
import { Brand } from "../models/brandModel.js";
// import { handleImageUpload } from "../utils/cloudinary.js";

export const findAllbrands = async (req, res, next) => {
    try {
        const brandList = await Brand.find();

        res.json({ message: "brand list fetched", data: brandList });
    } catch (error) {
        console.log(error);
        res.status(error.statusCode || 500).json(error.message || "Internal server error");
    }
};

export const fetchbrandDetails = async (req, res, next) => {
    try {
        const { brandId } = req.params;

        const brandDetails = await Brand.findOne({ _id: brandId });

        res.json({ message: "Brand details fetched", data: brandDetails });
    } catch (error) {
        console.log(error);
        res.status(error.statusCode || 500).json(error.message || "Internal server error");
    }
};

export const createBrand = async (req, res, next) => {
    try {
        let imageUrl;
        const { title, description } = req.body;
        console.log("image====", req.image);

        // if (req.image) {
        //     const cloudinaryRes = await cloudinaryInstance.uploader.upload(req.image.path);
        //     // imageUrl= cloudinaryRes.url;
        //     // imageUrl = await handleImageUpload(req.image.path)
        // }

        // console.log(imageUrl,'====imageUrl');
        
        const newbrand = new Brand({ title,description });
        await newbrand.save();

        res.json({ message: "brand created successfully", data: newbrand });
    } catch (error) {
        console.log(error);
        res.status(error.statusCode || 500).json(error.message || "Internal server error");
    }
};


export const updateBrand = async (req, res, next) => {
    try {

        const {brandId} = req.params;
        const { title, description } = req.body;
        

        const isbrandExist = await Brand.findById(brandId);
        if(!isbrandExist){
           return res.status(404).json({message:"brand not found"})
        }

        // console.log("image====", req.image);

        // if (req.image) {
        //     const cloudinaryRes = await cloudinaryInstance.uploader.upload(req.image.path);
        //     imageUrl= cloudinaryRes.url;
        //     // imageUrl = await handleImageUpload(req.image.path)
        // }

        // console.log(imageUrl,'====imageUrl');

        const brandUpdated = await Brand.findByIdAndUpdate(brandId,{ title, description },{new:true})

        res.json({ message: "Brand updated successfully", data: brandUpdated });
    } catch (error) {
        console.log(error);
        res.status(error.statusCode || 500).json(error.message || "Internal server error");
    }
};


export const deletebrand = async (req, res, next) => {
    try {

        const {brandId} = req.params;
        const brandDetails = await Brand.findByIdAndDelete(brandId)

        if(!brandDetails){
            return res.status(404).json({message:"Brand not found"})
        }

        res.json({ message: "Brand deleted successfully" });
    } catch (error) {
        console.log(error);
        res.status(error.statusCode || 500).json(error.message || "Internal server error");
    }
};


