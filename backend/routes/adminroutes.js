import express from "express";
import { adminLogin } from "../controller/admincontroller.js";

const router = express.Router();

router.post("/login", adminLogin);

export default router;

// import express from "express";
// import rateLimit from "express-rate-limit";
// import { adminLogin } from "../controller/admincontroller.js";

// const router = express.Router();

// // Admin login limiter
// const adminLoginLimiter = rateLimit({
//   windowMs: 60 * 60 * 1000, // 1 hour
//   max: 3, // max 3 attempts
//   message: {
//     success: false,
//     message: "Too many login attempts. Try again after 1 hour.",
//   },
//   standardHeaders: true,
//   legacyHeaders: false,
// });

// // Apply limiter ONLY to login route
// router.post("/login", adminLoginLimiter, adminLogin);

// export default router;