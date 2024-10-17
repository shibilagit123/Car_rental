import { cloudinaryInstance } from "../config/cloudinaryConfig.js";
import { Membership } from "../models/membershipModel.js";
// import { handleImageUpload } from "../utils/cloudinary.js";

export const findAllmemberships = async (req, res, next) => {
    try {
        const membershipList = await Membership.find();

        res.json({ message: "membership list fetched", data: membershipList });
    } catch (error) {
        console.log(error);
        res.status(error.statusCode || 500).json(error.message || "Internal server error");
    }
};

export const fetchmembershipDetails = async (req, res, next) => {
    try {
        const { membershipId } = req.params;

        const membershipDetails = await Membership.findOne({ _id: membershipId });

        res.json({ message: "membership details fetched", data: membershipDetails });
    } catch (error) {
        console.log(error);
        res.status(error.statusCode || 500).json(error.message || "Internal server error");
    }
};

export const createmembership = async (req, res, next) => {
    try {
        let imageUrl;
        const { title, description,amount,validity } = req.body;
        console.log("image====", req.image);

        // if (req.image) {
        //     const cloudinaryRes = await cloudinaryInstance.uploader.upload(req.image.path);
        //     // imageUrl= cloudinaryRes.url;
        //     // imageUrl = await handleImageUpload(req.image.path)
        // }

        // console.log(imageUrl,'====imageUrl');
        
        const newmembership = new Membership({ title,description,amount,validity });
        await newmembership.save();

        res.json({ message: "membership created successfully", data: newmembership });
    } catch (error) {
        console.log(error);
        res.status(error.statusCode || 500).json(error.message || "Internal server error");
    }
};


export const updatemembership = async (req, res, next) => {
    try {

        const {membershipId} = req.params;
        const { title, description } = req.body;
        

        const ismembershipExist = await Membership.findById(membershipId);
        if(!ismembershipExist){
           return res.status(404).json({message:"membership not found"})
        }

        // console.log("image====", req.image);

        // if (req.image) {
        //     const cloudinaryRes = await cloudinaryInstance.uploader.upload(req.image.path);
        //     imageUrl= cloudinaryRes.url;
        //     // imageUrl = await handleImageUpload(req.image.path)
        // }

        // console.log(imageUrl,'====imageUrl');

        const membershipUpdated = await Membership.findByIdAndUpdate(membershipId,{ title, description },{new:true})

        res.json({ message: "membership updated successfully", data: membershipUpdated });
    } catch (error) {
        console.log(error);
        res.status(error.statusCode || 500).json(error.message || "Internal server error");
    }
};


export const deletemembership = async (req, res, next) => {
    try {

        const {membershipId} = req.params;
        const membershipDetails = await Membership.findByIdAndDelete(membershipId)

        if(!membershipDetails){
            return res.status(404).json({message:"membership not found"})
        }

        res.json({ message: "membership deleted successfully" });
    } catch (error) {
        console.log(error);
        res.status(error.statusCode || 500).json(error.message || "Internal server error");
    }
};


