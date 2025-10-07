import express from "express";
import "dotenv/config";
import cors from "cors";
import http from "http";
import { connectDB } from "./lib/db.js";
import userRouter from "./routes/userRoutes.js";
import messageRouter from "./routes/messageRoutes.js";
import {Server} from "socket.io";

// express app and http server create
const app = express();
const server = http.createServer(app);

// initialize socket io
export const io = new Server(server, {
    cors:{origin: "*"} });

// stote online users
export const userSocketMap = {};

// socket io conn
io.on("connection", (socket)=>{
    const userId = socket.handshake.query.userId;
    console.log("new user connected", userId);

    if(userId){
        userSocketMap[userId] = socket.id;
    }

    // emit online users
    io.emit("getOnlineUsers", Object.keys(userSocketMap));
    socket.on("disconnect", ()=>{
        console.log("user disconnected", userId);
        delete userSocketMap[userId];
        io.emit("getOnlineUsers", Object.keys(userSocketMap));
    });  
})

// middleware setup
app.use(express.json({limit: "4mb"}));
app.use(cors());

// routes setup
app.use("/api/status", (req,res)=>res.send("server is live"));
app.use("/api/auth", userRouter);
app.use("/api/messages", messageRouter)
// connect momgodb
await connectDB();


const PORT = process.env.PORT || 5000;
server.listen(PORT, ()=> console.log("server is running on PORT :"+PORT));