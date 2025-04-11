import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.listen(process.env.PORT, async () => {
  console.log("Server running on the port : ", process.env.PORT);
});
