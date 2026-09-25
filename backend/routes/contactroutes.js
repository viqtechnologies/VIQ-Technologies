// routes/contactRoutes.js
import express from "express";
import { sendContactEmail } from "../email/contactemail.js";

const router = express.Router();

router.post("/submit", async (req, res) => {
  try {
    const { name, email, contact, address, message } = req.body;

    if (!name || !email || !contact || !address || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    await sendContactEmail({ name, email, contact, address, message });

    return res.status(200).json({
      success: true,
      message: "Contact form submitted successfully",
    });
  } catch (err) {
    console.error("Contact form error:", err);
    return res.status(500).json({
      success: false,
      message: "Failed to submit contact form",
    });
  }
});

export default router;
