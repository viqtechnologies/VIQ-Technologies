import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config(); 

export const adminLogin = (req, res) => {
  const { email, password } = req.body;

  
  const ADMIN_EMAIL = process.env.ADMIN_EMAIL;
  const ADMIN_PASS = process.env.ADMIN_PASSWORD;

  if (email !== ADMIN_EMAIL || password !== ADMIN_PASS) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const token = jwt.sign(
    { role: "admin" },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRE || "24h" } 
  );

  return res.json({ success: true, token });
};
