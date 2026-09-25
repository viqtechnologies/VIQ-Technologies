// models/Job.js
import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Job title is required"],
    trim: true,
    minlength: [3, "Title must be at least 3 characters"],
  },
  description: {
    type: String,
    required: [true, "Job description is required"],
    trim: true,
    minlength: [20, "Description must be at least 20 characters"],
  },
  skills: {
    type: String,
    required: [true, "Skills are required"],
    trim: true,
  },
  experience: {
    type: String,
    required: [true, "Experience level is required"],
    enum: ["Fresher", "0-1 Year", "1-3 Years", "3-5 Years", "5+ Years"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Job = mongoose.model("Job", jobSchema);

export default Job;
