import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/connectDb.js";
import authRoute from "./routes/authRoute.js";
const app = express();
dotenv.config();
connectDB();

app.use("/api/auth", authRoute);
app.listen(5000, () => {
  console.log("Listening on port 5000");
});
