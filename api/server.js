const welcomeRouter = require("../welcome/welcome-router");
const authRouter = require("../auth/auth-router");
const usersRouter = require("../users/users-router");
const helmet = require("helmet");
const express = require("express");
const server = express();

server.use(helmet());
server.use(express.json());
server.use("/", welcomeRouter);
server.use("/api/auth", authRouter);
server.use("/api/users", usersRouter);
module.exports = server;
