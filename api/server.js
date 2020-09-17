const welcomeRouter = require("../welcome/welcome-router");
const helmet = require("helmet");
const express = require("express");
const server = express();

server.use(helmet());
server.use("/", welcomeRouter);

module.exports = server;
