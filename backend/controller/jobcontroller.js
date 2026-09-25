
import Job from "../models/job.js";


export const createJob = async (req, res) => {
  try {
    const { title, description, skills, experience } = req.body;

    // Basic validation
    if (!title || !description || !skills || !experience) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const newJob = await Job.create({
      title,
      description,
      skills,
      experience,
    });

    res.status(201).json({
      success: true,
      message: "Job posted successfully",
      data: newJob,
    });
  } catch (error) {
    console.error("Error creating job:", error);
    res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message,
    });
  }
};


export const getAllJobs = async (req, res) => {
  try {
    // Fetch all jobs and sort by newest first
    const jobs = await Job.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: jobs.length,
      data: jobs,
    });
  } catch (error) {
    console.error("Error fetching jobs:", error);
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};


export const deleteJob = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);

    if (!job) {
      return res.status(404).json({
        success: false,
        message: "Job not found",
      });
    }

    await Job.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "Job deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting job:", error);
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};


export const updatejob = async (req, res) => {
  try {
    const { title, description, skills, experience } = req.body;

    const job = await Job.findById(req.params.id);

    if (!job) {
      return res.status(404).json({
        success: false,
        message: "Job not found",
      });
    }

    const updatedJob = await Job.findByIdAndUpdate(
      req.params.id,
      {
        title,
        description,
        skills,
        experience,
      },
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "Job updated successfully",
      data: updatedJob,
    });
  } catch (error) {
    console.error("Error updating job:", error);
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};
