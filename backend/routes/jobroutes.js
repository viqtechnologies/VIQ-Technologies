
import express from "express";
import {
  createJob,
  getAllJobs,
  deleteJob,updatejob
} from "../controller/jobcontroller.js";

const router = express.Router();


router.post("/submit", createJob);


router.get("/jobs", getAllJobs);


router.delete("/delete/:id", deleteJob);

router.put("/update/:id", updatejob);

export default router;
