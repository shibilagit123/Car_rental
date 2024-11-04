import jwt from 'jsonwebtoken'
import { User } from "../models/userModel.js";

export const authUser = async (req,res,next)=>{
    try {
        const {token} = req.cookies;
        // console.log(token,"gggggggggggggggggggggg");
        if(!token){
          return res.status(401).json({message:'user not autherised'}) 
        }
        
        const tokenVerified = jwt.verify(token,process.env.JWT_SECRET_KEY);
        if(!tokenVerified){
            return res.status(401).json({message:'user not autherised'}) 
        }
        
        // console.log(tokenVerified,'====token verified');
        const authUser = await User.findById(tokenVerified.id);
        // console.log(tokenVerified._id);
        // console.log(authUser);
        req.user=authUser;
        
        next()
        
    } catch (error) {
        console.log(error);
        return res.status(401).json({message:'user autherization failed'}) 
    }
}