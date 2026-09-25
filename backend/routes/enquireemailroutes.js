// email/enquiryRoutes.js
import express from "express";
import { sendEnquiryEmail } from "../email/enquireemail.js";

const router = express.Router();

router.post("/submit", async (req, res) => {
  try {
    const { name, email, contact, queryType, message } = req.body;

    if (!name || !email || !contact || !queryType || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    await sendEnquiryEmail({ name, email, contact, queryType, message });

    return res.status(200).json({
      success: true,
      message: "Enquiry email sent successfully",
    });
  } catch (err) {
    console.error("Enquiry submit error:", err);
    return res.status(500).json({
      success: false,
      message: "Failed to send enquiry email",
    });
  }
});

export default router;
