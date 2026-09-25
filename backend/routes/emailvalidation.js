import express from "express";
import { verifyEmail } from "../controller/emailvalidation.js";

const router = express.Router();

router.get("/verify-email", verifyEmail);

export default router;
