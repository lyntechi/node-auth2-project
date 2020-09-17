const welcomeRouter = require("../welcome/welcome-router");
const authRouter = require("../auth/auth-router");
const helmet = require("helmet");
const express = require("express");
const server = express();

server.use(helmet());
server.use(express.json());
server.use("/", welcomeRouter);
server.use("/api/auth", authRouter);
module.exports = server;
