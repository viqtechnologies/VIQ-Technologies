import express from "express";
import { sendJobApplicationEmail } from "../email/careeremail.js";

const router = express.Router();

router.post("/apply", async (req, res) => {
  try {
    const { name, email, contact, jobTitle, message, jobId } = req.body;

    if (!name || !email || !contact || !jobTitle || !message) {
      return res.status(400).json({
        success: false,
        message: "Name, email, contact, job title, and message are required",
      });
    }

    await sendJobApplicationEmail({
      name,
      email,
      contact,
      jobTitle,
      message,
      jobId,
    });

    return res.status(200).json({
      success: true,
      message:
        "Job application submitted successfully! We will contact you soon.",
    });
  } catch (err) {
    console.error("Job application error:", err);
    return res.status(500).json({
      success: false,
      message: "Failed to submit job application",
    });
  }
});

export default router;
