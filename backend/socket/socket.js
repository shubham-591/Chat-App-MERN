import { Server } from "socket.io";
import express from "express";
import http from "http";

const app = express();
const server = http.createServer(app);
const io = new Server(server,{
    cors: {
        origin: ["http://localhost:3000"],
        methods: ["GET", "POST"],
    }
});

export const getReceiverSocketId = (receiverId) => {
    return userSocketMap[receiverId];
}

const userSocketMap = {}; // {userId : socketId}

io.on("connection", (socket) => {
    console.log("A user is connected", socket.id);

    const userId = socket.handshake.query.userId;
    if(userId != "undefined") {
        userSocketMap[userId] = socket.id;
    }

    // io.emit() is used to send the events to all the connected clients
    io.emit("getOnlineUsers", Object.keys(userSocketMap));
    
    // socket.on() is used to listen to the events and can be used for both client side and server side.
    socket.on("disconnect", () => {
        console.log("User disconnected", socket.id);
        delete userSocketMap[userId];
        io.emit("getOnlineUsers", Object.keys(userSocketMap));
    })
})

export {app, io, server};