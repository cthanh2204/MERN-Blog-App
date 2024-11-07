import express from "express";
import { userSignUp } from "../controllers/authController.js";

const router = express.Router();

router.post("/signup", userSignUp);

export default router;
