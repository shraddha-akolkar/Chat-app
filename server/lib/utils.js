import jwt from "jsonwebtoken";

export const generateToken = (userId) =>{
    const token = jwt.sogn({userId},process.env.JWT_SECRET);
    return token;
}