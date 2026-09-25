import axios from "axios";

export const verifyEmail = async (req, res) => {
  try {
    const { email } = req.query;

    if (!email) {
      return res.status(400).json({
        success: false,
        message: "Email is required",
      });
    }

    const { data } = await axios.get(
      "https://emailreputation.abstractapi.com/v1/",
      {
        params: {
          api_key: process.env.ABSTRACT_API_KEY,
          email,
        },
      },
    );

    const isValid =
      data?.email_deliverability?.status === "deliverable" &&
      !data?.email_quality?.is_disposable;

    console.log("isValid =", isValid);

    return res.json({
      success: true,
      valid: isValid,
      data,
    });
  } catch (error) {
    console.error(
      "Email Verification Error:",
      error.response?.data || error.message,
    );

    return res.status(500).json({
      success: false,
      valid: false,
      message: "Email verification failed",
    });
  }
};
