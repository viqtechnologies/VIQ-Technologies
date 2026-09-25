// // routes/enrollRoute.js
// import express from "express";
// import { sendEnrollCourseEmail } from "../email/enrollcourse.js";

// const router = express.Router();

// router.post("/enroll-course", async (req, res) => {
//   try {
//     const { name, email, contact, interest, message } = req.body;

//     // basic validation
//     if (!name || !email || !contact || !interest) {
//       return res.status(400).json({
//         success: false,
//         message: "Please fill all required fields",
//       });
//     }

//     await sendEnrollCourseEmail({ name, email, contact, interest, message });

//     res.status(200).json({
//       success: true,
//       message: "Enrollment request sent successfully",
//     });
//   } catch (error) {
//     console.error("Enroll route error:", error);
//     res.status(500).json({
//       success: false,
//       message: "Failed to send enrollment request",
//     });
//   }
// });

// export default router;


// routes/enrollRoute.js
import express from "express";
import { sendEnrollCourseEmail } from "../email/enrollcourse.js";

const router = express.Router();

router.post("/enroll-course", async (req, res) => {
  try {
    // Added college and stream here
    const { name, email, contact, interest, message, college, stream } = req.body;

    // Added college and stream to basic validation
    if (!name || !email || !contact || !interest || !college || !stream) {
      return res.status(400).json({
        success: false,
        message: "Please fill all required fields",
      });
    }

    // Pass them to the email function
    await sendEnrollCourseEmail({ name, email, contact, interest, message, college, stream });

    res.status(200).json({
      success: true,
      message: "Enrollment request sent successfully",
    });
  } catch (error) {
    console.error("Enroll route error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to send enrollment request",
    });
  }
});

export default router;