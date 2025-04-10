"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const app = express();
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
app.use("/", (req, res) => {
    res.send("Hello from the server");
});
app.use("/hello", (req, res) => {
    res.send("Hello from the hello");
});
app.listen(process.env.PORT, () => {
    console.log("Server running on the port : ", process.env.PORT);
});
