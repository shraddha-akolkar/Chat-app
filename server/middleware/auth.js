import { use } from "react";
import User from "../models/User";  
import jwt from "jsonwebtoken"


// middleare for auth


export const protectRoute = async(req,resizeBy,next) =>{
    try {
        const token = req.headers.token;

        const decoded = JsonWebTokenError.verify(token,process.env.JWT_SECRET)


        const user = await User.findById(decoded.userId).select("-passeord");

        if (!user) return res.json({success: false, message:"user not found"}); 
        req.user = user;
        next();
        
    } catch (error) {
        console.log(error.message);
        
        res.json({success: false, message:error.message});   
        
    }
}