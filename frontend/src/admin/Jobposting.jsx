// // components2/JobPosting.jsx
// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import {
//   FileText,
//   Users,
//   Send,
//   Plus,
//   AlertCircle,
//   Trash2,
//   Briefcase,
//   Clock,
// } from "lucide-react";
// import { toast } from "react-hot-toast";
// import { BASE_URL } from "../Apipath.jsx";

// const JobPosting = () => {
//   const [formData, setFormData] = useState({
//     title: "",
//     description: "",
//     skills: "",
//     experience: "",
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [errors, setErrors] = useState({});
//   const [postedJobs, setPostedJobs] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);

//   // Fetch all jobs on component mount
//   useEffect(() => {
//     fetchJobs();
//   }, []);

//   const fetchJobs = async () => {
//     try {
//       const response = await fetch(`${BASE_URL}/api/job/jobs`);
//       const result = await response.json();

//       if (result.success) {
//         setPostedJobs(result.data);
//       }
//     } catch (error) {
//       console.error("Error fetching jobs:", error);
//       toast.error("Failed to load jobs");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const validateForm = () => {
//     const newErrors = {};

//     if (!formData.title.trim()) {
//       newErrors.title = "Job title is required";
//     } else if (formData.title.length < 3) {
//       newErrors.title = "Job title must be at least 3 characters";
//     }

//     if (!formData.description.trim()) {
//       newErrors.description = "Job description is required";
//     } else if (formData.description.length < 20) {
//       newErrors.description = "Description must be at least 20 characters";
//     }

//     if (!formData.skills.trim()) {
//       newErrors.skills = "Skills are required";
//     }

//     if (!formData.experience) {
//       newErrors.experience = "Experience level is required";
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));

//     if (errors[name]) {
//       setErrors((prev) => ({
//         ...prev,
//         [name]: "",
//       }));
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!validateForm()) {
//       toast.error("Please fill the form correctly.");
//       return;
//     }

//     setIsSubmitting(true);

//     try {
//       const response = await fetch(`${BASE_URL}/api/job/submit`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });

//       const result = await response.json();

//       if (response.ok && result.success) {
//         setFormData({
//           title: "",
//           description: "",
//           skills: "",
//           experience: "",
//         });
//         setErrors({});
//         toast.success("Job posted successfully!");
//         fetchJobs(); // Refresh the job list
//       } else {
//         toast.error(result.message || "Failed to post job.");
//       }
//     } catch (error) {
//       console.error("Job posting error:", error);
//       toast.error("Something went wrong. Please try again.");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const handleDelete = async (jobId) => {
//     toast(
//       (t) => (
//         <div>
//           <p className="font-semibold">
//             Are you sure you want to delete this job posting?
//           </p>

//           <div className="flex gap-3 mt-3">
//             <button
//               className="bg-red-500 text-white px-3 py-1 rounded"
//               onClick={async () => {
//                 toast.dismiss(t.id); // close popup

//                 try {
//                   const response = await fetch(
//                     `${BASE_URL}/api/job/delete/${jobId}`,
//                     {
//                       method: "DELETE",
//                     }
//                   );

//                   const result = await response.json();

//                   if (response.ok && result.success) {
//                     toast.success("Job deleted successfully!");
//                     setPostedJobs((prev) =>
//                       prev.filter((job) => job._id !== jobId)
//                     );
//                   } else {
//                     toast.error(result.message || "Failed to delete job.");
//                   }
//                 } catch (error) {
//                   console.error("Error deleting job:", error);
//                   toast.error("Something went wrong. Please try again.");
//                 }
//               }}
//             >
//               Yes
//             </button>

//             <button
//               className="bg-gray-300 text-black px-3 py-1 rounded"
//               onClick={() => toast.dismiss(t.id)} // simply close popup
//             >
//               No
//             </button>
//           </div>
//         </div>
//       ),
//       {
//         duration: 8000,
//         style: { border: "1px solid #ddd", padding: "16px" },
//       }
//     );
//   };

//   const formatDate = (dateString) => {
//     const date = new Date(dateString);
//     return date.toLocaleDateString("en-US", {
//       year: "numeric",
//       month: "short",
//       day: "numeric",
//     });
//   };

//   const experienceLevels = [
//     "Fresher",
//     "0-1 Year",
//     "1-3 Years",
//     "3-5 Years",
//     "5+ Years",
//   ];

//   return (
//     <div className="p-6">
//       <div className="mb-8">
//         <h1 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900">
//           Job Posting
//         </h1>
//         <p className="text-lg text-gray-600">
//           Create new job openings for your organization
//         </p>
//       </div>

//       {/* Job Posting Form */}
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         className="mb-10 rounded-2xl p-6 shadow-xl border bg-gradient-to-br from-emerald-50 to-teal-50 border-emerald-200"
//       >
//         <div className="flex items-center gap-3 mb-6">
//           <Plus className="w-6 h-6 text-emerald-600" />
//           <h2 className="text-2xl font-bold text-gray-900">
//             Create New Job Post
//           </h2>
//         </div>

//         <form onSubmit={handleSubmit} className="space-y-4">
//           {/* Job Title */}
//           <div>
//             <label className="block mb-2 text-sm font-medium text-gray-700">
//               <FileText className="w-4 h-4 inline mr-2" />
//               Job Title *
//             </label>
//             <input
//               type="text"
//               name="title"
//               value={formData.title}
//               onChange={handleChange}
//               placeholder="e.g. Web Developer"
//               className={`w-full px-4 py-3 rounded-xl border-2 outline-none transition-all bg-white border-gray-300 text-gray-900 focus:border-emerald-500 ${
//                 errors.title ? "border-red-500" : ""
//               }`}
//             />
//             {errors.title && (
//               <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
//                 <AlertCircle className="w-4 h-4" />
//                 {errors.title}
//               </p>
//             )}
//           </div>

//           {/* Job Description */}
//           <div>
//             <label className="block mb-2 text-sm font-medium text-gray-700">
//               Job Description *
//             </label>
//             <textarea
//               name="description"
//               value={formData.description}
//               onChange={handleChange}
//               rows={4}
//               placeholder="Describe the job role and responsibilities..."
//               className={`w-full px-4 py-3 rounded-xl border-2 outline-none transition-all resize-none bg-white border-gray-300 text-gray-900 focus:border-emerald-500 ${
//                 errors.description ? "border-red-500" : ""
//               }`}
//             />
//             {errors.description && (
//               <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
//                 <AlertCircle className="w-4 h-4" />
//                 {errors.description}
//               </p>
//             )}
//           </div>

//           {/* Skills Required */}
//           <div>
//             <label className="block mb-2 text-sm font-medium text-gray-700">
//               Skills Required *
//             </label>
//             <textarea
//               name="skills"
//               value={formData.skills}
//               onChange={handleChange}
//               rows={3}
//               placeholder="List the required skills..."
//               className={`w-full px-4 py-3 rounded-xl border-2 outline-none transition-all resize-none bg-white border-gray-300 text-gray-900 focus:border-emerald-500 ${
//                 errors.skills ? "border-red-500" : ""
//               }`}
//             />
//             {errors.skills && (
//               <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
//                 <AlertCircle className="w-4 h-4" />
//                 {errors.skills}
//               </p>
//             )}
//           </div>

//           {/* Experience */}
//           <div>
//             <label className="block mb-2 text-sm font-medium text-gray-700">
//               <Users className="w-4 h-4 inline mr-2" />
//               Experience Required *
//             </label>
//             <select
//               name="experience"
//               value={formData.experience}
//               onChange={handleChange}
//               className={`w-full px-4 py-3 rounded-xl border-2 outline-none transition-all appearance-none bg-white border-gray-300 text-gray-900 focus:border-emerald-500 ${
//                 errors.experience ? "border-red-500" : ""
//               }`}
//             >
//               <option value="">Select experience level</option>
//               {experienceLevels.map((level) => (
//                 <option key={level} value={level}>
//                   {level}
//                 </option>
//               ))}
//             </select>
//             {errors.experience && (
//               <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
//                 <AlertCircle className="w-4 h-4" />
//                 {errors.experience}
//               </p>
//             )}
//           </div>

//           <motion.button
//             whileHover={{ scale: 1.02 }}
//             whileTap={{ scale: 0.98 }}
//             type="submit"
//             disabled={isSubmitting}
//             className={`px-8 py-3 rounded-xl font-bold text-white shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed w-full bg-gradient-to-r from-emerald-500 to-teal-600 flex items-center justify-center gap-2`}
//           >
//             {isSubmitting ? (
//               <>
//                 <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
//                 Posting Job...
//               </>
//             ) : (
//               <>
//                 <Send className="w-5 h-5" />
//                 Post Job Now
//               </>
//             )}
//           </motion.button>
//         </form>
//       </motion.div>

//       {/* Posted Jobs Section */}
//       <div className="mb-8">
//         <div className="flex items-center gap-3 mb-6">
//           <Briefcase className="w-6 h-6 text-emerald-600" />
//           <h2 className="text-2xl font-bold text-gray-900">
//             Posted Jobs ({postedJobs.length})
//           </h2>
//         </div>

//         {isLoading ? (
//           <div className="flex justify-center items-center py-12">
//             <div className="w-10 h-10 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin" />
//           </div>
//         ) : postedJobs.length === 0 ? (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             className="text-center py-12 rounded-2xl border-2 border-dashed border-gray-300 text-gray-500"
//           >
//             <Briefcase className="w-16 h-16 mx-auto mb-4 opacity-50" />
//             <p className="text-lg">No jobs posted yet</p>
//             <p className="text-sm mt-2">Create your first job posting above</p>
//           </motion.div>
//         ) : (
//           <div className="grid gap-6">
//             {postedJobs.map((job, index) => (
//               <motion.div
//                 key={job._id}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: index * 0.1 }}
//                 className="rounded-2xl p-6 shadow-lg border bg-white border-gray-200"
//               >
//                 <div className="flex justify-between items-start mb-4">
//                   <div className="flex-1">
//                     <h3 className="text-xl font-bold mb-2 text-gray-900">
//                       {job.title}
//                     </h3>
//                     <div className="flex items-center gap-4 text-sm mb-3">
//                       <span className="flex items-center gap-1 text-gray-600">
//                         <Clock className="w-4 h-4" />
//                         {formatDate(job.createdAt)}
//                       </span>
//                       <span className="px-3 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-700">
//                         {job.experience}
//                       </span>
//                     </div>
//                   </div>
//                   <motion.button
//                     whileHover={{ scale: 1.1 }}
//                     whileTap={{ scale: 0.9 }}
//                     onClick={() => handleDelete(job._id)}
//                     className="p-2 rounded-lg transition-colors hover:bg-red-50 text-red-600"
//                     title="Delete job"
//                   >
//                     <Trash2 className="w-5 h-5" />
//                   </motion.button>
//                 </div>

//                 <div className="space-y-3">
//                   <div>
//                     <h4 className="text-sm font-semibold mb-1 text-gray-700">
//                       Description:
//                     </h4>
//                     <p className="text-sm text-gray-600 whitespace-pre-wrap">
//                       {job.description}
//                     </p>
//                   </div>

//                   <div>
//                     <h4 className="text-sm font-semibold mb-1 text-gray-700">
//                       Skills Required:
//                     </h4>
//                     <p className="text-sm text-gray-600 whitespace-pre-wrap">
//                       {job.skills}
//                     </p>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default JobPosting;








// components2/JobPosting.jsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FileText,
  Users,
  Send,
  Plus,
  AlertCircle,
  Trash2,
  Briefcase,
  Clock,
  Edit,
} from "lucide-react";
import { toast } from "react-hot-toast";
import { BASE_URL } from "../Apipath.jsx";

const JobPosting = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    skills: "",
    experience: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const [postedJobs, setPostedJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [editingJobId, setEditingJobId] = useState(null);

  // Fetch all jobs on component mount
  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const response = await fetch(`${BASE_URL}/api/job/jobs`);
      const result = await response.json();

      if (result.success) {
        setPostedJobs(result.data);
      }
    } catch (error) {
      console.error("Error fetching jobs:", error);
      toast.error("Failed to load jobs");
    } finally {
      setIsLoading(false);
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.title.trim()) {
      newErrors.title = "Job title is required";
    } else if (formData.title.length < 3) {
      newErrors.title = "Job title must be at least 3 characters";
    }

    if (!formData.description.trim()) {
      newErrors.description = "Job description is required";
    } else if (formData.description.length < 20) {
      newErrors.description = "Description must be at least 20 characters";
    }

    if (!formData.skills.trim()) {
      newErrors.skills = "Skills are required";
    }

    if (!formData.experience) {
      newErrors.experience = "Experience level is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error("Please fill the form correctly.");
      return;
    }

    setIsSubmitting(true);

    try {
      const url = editingJobId
        ? `${BASE_URL}/api/job/update/${editingJobId}`
        : `${BASE_URL}/api/job/submit`;
      const method = editingJobId ? "PUT" : "POST";

      const response = await fetch(url, {
        method: method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setFormData({
          title: "",
          description: "",
          skills: "",
          experience: "",
        });
        setErrors({});
        setEditingJobId(null);
        toast.success(
          editingJobId
            ? "Job updated successfully!"
            : "Job posted successfully!"
        );
        fetchJobs(); // Refresh the job list
      } else {
        toast.error(result.message || "Failed to post job.");
      }
    } catch (error) {
      console.error("Job posting error:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleEdit = (job) => {
    setFormData({
      title: job.title,
      description: job.description,
      skills: job.skills,
      experience: job.experience,
    });
    setEditingJobId(job._id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleCancelEdit = () => {
    setFormData({
      title: "",
      description: "",
      skills: "",
      experience: "",
    });
    setEditingJobId(null);
    setErrors({});
  };

  const handleDelete = async (jobId) => {
    toast(
      (t) => (
        <div>
          <p className="font-semibold">
            Are you sure you want to delete this job posting?
          </p>

          <div className="flex gap-3 mt-3">
            <button
              className="bg-red-500 text-white px-3 py-1 rounded"
              onClick={async () => {
                toast.dismiss(t.id); // close popup

                try {
                  const response = await fetch(
                    `${BASE_URL}/api/job/delete/${jobId}`,
                    {
                      method: "DELETE",
                    }
                  );

                  const result = await response.json();

                  if (response.ok && result.success) {
                    toast.success("Job deleted successfully!");
                    setPostedJobs((prev) =>
                      prev.filter((job) => job._id !== jobId)
                    );
                  } else {
                    toast.error(result.message || "Failed to delete job.");
                  }
                } catch (error) {
                  console.error("Error deleting job:", error);
                  toast.error("Something went wrong. Please try again.");
                }
              }}
            >
              Yes
            </button>

            <button
              className="bg-gray-300 text-black px-3 py-1 rounded"
              onClick={() => toast.dismiss(t.id)} // simply close popup
            >
              No
            </button>
          </div>
        </div>
      ),
      {
        duration: 8000,
        style: { border: "1px solid #ddd", padding: "16px" },
      }
    );
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const experienceLevels = [
    "Fresher",
    "0-1 Year",
    "1-3 Years",
    "3-5 Years",
    "5+ Years",
  ];

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900">
          Job Posting
        </h1>
        <p className="text-lg text-gray-600">
          Create new job openings for your organization
        </p>
      </div>

      {/* Job Posting Form */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-10 rounded-2xl p-6 shadow-xl border bg-gradient-to-br from-emerald-50 to-teal-50 border-emerald-200"
      >
        <div className="flex items-center gap-3 mb-6">
          {editingJobId ? (
            <Edit className="w-6 h-6 text-emerald-600" />
          ) : (
            <Plus className="w-6 h-6 text-emerald-600" />
          )}
          <h2 className="text-2xl font-bold text-gray-900">
            {editingJobId ? "Update Job Post" : "Create New Job Post"}
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Job Title */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              <FileText className="w-4 h-4 inline mr-2" />
              Job Title *
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="e.g. Web Developer"
              className={`w-full px-4 py-3 rounded-xl border-2 outline-none transition-all bg-white border-gray-300 text-gray-900 focus:border-emerald-500 ${
                errors.title ? "border-red-500" : ""
              }`}
            />
            {errors.title && (
              <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                <AlertCircle className="w-4 h-4" />
                {errors.title}
              </p>
            )}
          </div>

          {/* Job Description */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Job Description *
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={4}
              placeholder="Describe the job role and responsibilities..."
              className={`w-full px-4 py-3 rounded-xl border-2 outline-none transition-all resize-none bg-white border-gray-300 text-gray-900 focus:border-emerald-500 ${
                errors.description ? "border-red-500" : ""
              }`}
            />
            {errors.description && (
              <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                <AlertCircle className="w-4 h-4" />
                {errors.description}
              </p>
            )}
          </div>

          {/* Skills Required */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Skills Required *
            </label>
            <textarea
              name="skills"
              value={formData.skills}
              onChange={handleChange}
              rows={3}
              placeholder="List the required skills..."
              className={`w-full px-4 py-3 rounded-xl border-2 outline-none transition-all resize-none bg-white border-gray-300 text-gray-900 focus:border-emerald-500 ${
                errors.skills ? "border-red-500" : ""
              }`}
            />
            {errors.skills && (
              <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                <AlertCircle className="w-4 h-4" />
                {errors.skills}
              </p>
            )}
          </div>

          {/* Experience */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              <Users className="w-4 h-4 inline mr-2" />
              Experience Required *
            </label>
            <select
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-xl border-2 outline-none transition-all appearance-none bg-white border-gray-300 text-gray-900 focus:border-emerald-500 ${
                errors.experience ? "border-red-500" : ""
              }`}
            >
              <option value="">Select experience level</option>
              {experienceLevels.map((level) => (
                <option key={level} value={level}>
                  {level}
                </option>
              ))}
            </select>
            {errors.experience && (
              <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                <AlertCircle className="w-4 h-4" />
                {errors.experience}
              </p>
            )}
          </div>

          <div className="flex gap-3">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isSubmitting}
              className={`flex-1 px-8 py-3 rounded-xl font-bold text-white shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed bg-gradient-to-r from-emerald-500 to-teal-600 flex items-center justify-center gap-2`}
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  {editingJobId ? "Updating Job..." : "Posting Job..."}
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  {editingJobId ? "Update Job" : "Post Job Now"}
                </>
              )}
            </motion.button>

            {editingJobId && (
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="button"
                onClick={handleCancelEdit}
                className="px-8 py-3 rounded-xl font-bold text-gray-700 shadow-lg transition-all bg-gray-200 hover:bg-gray-300"
              >
                Cancel
              </motion.button>
            )}
          </div>
        </form>
      </motion.div>

      {/* Posted Jobs Section */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-6">
          <Briefcase className="w-6 h-6 text-emerald-600" />
          <h2 className="text-2xl font-bold text-gray-900">
            Posted Jobs ({postedJobs.length})
          </h2>
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center py-12">
            <div className="w-10 h-10 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin" />
          </div>
        ) : postedJobs.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12 rounded-2xl border-2 border-dashed border-gray-300 text-gray-500"
          >
            <Briefcase className="w-16 h-16 mx-auto mb-4 opacity-50" />
            <p className="text-lg">No jobs posted yet</p>
            <p className="text-sm mt-2">Create your first job posting above</p>
          </motion.div>
        ) : (
          <div className="grid gap-6">
            {postedJobs.map((job, index) => (
              <motion.div
                key={job._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="rounded-2xl p-6 shadow-lg border bg-white border-gray-200"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2 text-gray-900">
                      {job.title}
                    </h3>
                    <div className="flex items-center gap-4 text-sm mb-3">
                      <span className="flex items-center gap-1 text-gray-600">
                        <Clock className="w-4 h-4" />
                        {formatDate(job.createdAt)}
                      </span>
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-700">
                        {job.experience}
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => handleEdit(job)}
                      className="p-2 rounded-lg transition-colors hover:bg-emerald-50 text-emerald-600"
                      title="Edit job"
                    >
                      <Edit className="w-5 h-5" />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => handleDelete(job._id)}
                      className="p-2 rounded-lg transition-colors hover:bg-red-50 text-red-600"
                      title="Delete job"
                    >
                      <Trash2 className="w-5 h-5" />
                    </motion.button>
                  </div>
                </div>

                <div className="space-y-3">
                  <div>
                    <h4 className="text-sm font-semibold mb-1 text-gray-700">
                      Description:
                    </h4>
                    <p className="text-sm text-gray-600 whitespace-pre-wrap">
                      {job.description}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold mb-1 text-gray-700">
                      Skills Required:
                    </h4>
                    <p className="text-sm text-gray-600 whitespace-pre-wrap">
                      {job.skills}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default JobPosting;