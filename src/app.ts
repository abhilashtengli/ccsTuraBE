const express = require("express");
const app = express();
import dotenv from "dotenv";
dotenv.config();

app.get("/", (req: any, res: any) => {
  res.send("Namste from hero");
});
app.get("/hello", (req: any, res: any) => {
  res.send("Hello from the hello");
});
app.listen(process.env.PORT, () => {
  console.log("Server running on the port : ", process.env.PORT);
});
