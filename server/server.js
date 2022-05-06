const express = require("express");
const io = require("socket.io");
const app = express();

const server = app.listen(3010, () => {
  console.log("server running port 3010");
});

const mysocket = io(server);
const chatSocket = mysocket.of("/socket");

chatSocket.on("connection", (socket) => {
  console.log("new User connecred!!");

  socket.on("disconnect", () => {});
});
