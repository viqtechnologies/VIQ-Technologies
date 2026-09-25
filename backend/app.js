import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";

import adminRoutes from "./routes/adminroutes.js";
import blogroutes from "./routes/blogroutes.js"
import jobroutes from "./routes/jobroutes.js"
import enquireemailroutes from "./routes/enquireemailroutes.js"
import careeremailroutes from "./routes/careeremailroutes.js";
import contactRoutes from "./routes/contactroutes.js";
import enrollroutes from "./routes/enrollroutes.js";
import emailvalidation from "./routes/emailvalidation.js";
dotenv.config();  
 
const app = express();

app.use(  
  cors({
    origin: ["https://viq-seven.vercel.app", "https://viqtech.in"],
  }),
); 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/admin", adminRoutes);
app.use("/api/blogs", blogroutes);
app.use("/api/job", jobroutes);
app.use("/api/enquiry", enquireemailroutes);
app.use("/api/career", careeremailroutes);
app.use("/api/contact", contactRoutes);
app.use("/api/enroll", enrollroutes);
app.use("/api", emailvalidation);


app.get("/", (req, res) => {
  res.send("server running");
});

console.log(process.env.ABSTRACT_API_KEY);

app.use((req, res) => {
  res.status(404).json({
    message: "Route not found",
  });
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log(" MongoDB Connected"))
  .catch((err) => console.error(" MongoDB Error:", err));

app.listen(5000, () => {
    console.log("Server started on port 5000");
});
