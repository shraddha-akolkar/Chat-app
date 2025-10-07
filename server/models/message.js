import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    senderId : {type: mongoose.Schema.Types.ObjectId, ref: "User", required: true},
    receiverId : {type: mongoose.Schema.Types.ObjectId, ref: "User", required: true},
    text : {type : String, required: true},
    image : {type : String, default: ""}, 
    seen : {type : Boolean, default: false}


}, {timestamps: true}) 

const Message = mongoose.model("User, messageSchema");

export default Message;