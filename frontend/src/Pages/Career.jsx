
// components/Career.jsx
import React, { useState, useEffect } from "react";
import {
  Search,
  Briefcase,
  Clock,
  ChevronRight,
  X,
  ArrowRight,
  Users,
  Send,
  CheckCircle,
} from "lucide-react";
import { BASE_URL } from "../Apipath.jsx";

const Career = () => {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedJob, setSelectedJob] = useState(null);
  const [showApplicationForm, setShowApplicationForm] = useState(false);

  // Fetch Jobs
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch(`${BASE_URL}/api/job/jobs`);
        const result = await response.json();
        if (result.success) {
          setJobs(result.data);
          setFilteredJobs(result.data);
        }
      } catch (error) {
        console.error("Error loading jobs:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchJobs();
  }, []);

  // Filter Logic
  useEffect(() => {
    const results = jobs.filter(
      (job) =>
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.skills.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredJobs(results);
  }, [searchTerm, jobs]);

  // Format Date Helper
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  const handleApplyClick = () => {
    setShowApplicationForm(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Hero Section */}
      <div className="bg-white border-b border-slate-200 pt-10 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-2">
              Join Our <span className="text-blue-600">Team</span>
            </h1>
            <p className="text-lg text-slate-600 max-w-4xl mx-auto mb-10">
              We are looking for talented individuals to help us build the
              future. Explore our open positions and find the role that fits you
              best.
            </p>
          </div>
        </div>
      </div>

      {/* Job Grid Section */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        {isLoading ? (
          <div className="flex justify-center items-center h-40">
            <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
          </div>
        ) : filteredJobs.length === 0 ? (
          <div className="text-center py-20">
            <div className="bg-blue-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-10 h-10 text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold text-slate-800">
              No jobs found
            </h3>
            <p className="text-slate-500 mt-2">
              Try adjusting your search terms.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredJobs.map((job) => (
              <JobCard
                key={job._id}
                job={job}
                onClick={() => setSelectedJob(job)}
                formatDate={formatDate}
              />
            ))}
          </div>
        )}
      </div>

      {/* Job Details Modal */}
      {selectedJob && !showApplicationForm && (
        <Modal
          job={selectedJob}
          onClose={() => setSelectedJob(null)}
          onApply={handleApplyClick}
          formatDate={formatDate}
        />
      )}

      {/* Application Form Modal */}
      {showApplicationForm && selectedJob && (
        <ApplicationForm
          job={selectedJob}
          onClose={() => {
            setShowApplicationForm(false);
            setSelectedJob(null);
          }}
          onBack={() => setShowApplicationForm(false)}
        />
      )}
    </div>
  );
};

// Job Card Component
const JobCard = ({ job, onClick, formatDate }) => {
  return (
    <div
      className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl border border-slate-100 transition-all duration-300 flex flex-col h-full group cursor-pointer relative overflow-hidden hover:-translate-y-1"
      onClick={onClick}
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>

      <div className="flex justify-between items-start mb-4">
        <div className="bg-blue-50 p-3 rounded-xl">
          <Briefcase className="w-6 h-6 text-blue-600" />
        </div>
        <span className="text-xs font-semibold text-slate-400 bg-slate-100 px-3 py-1 rounded-full flex items-center gap-1">
          <Clock className="w-3 h-3" /> {formatDate(job.createdAt)}
        </span>
      </div>

      <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">
        {job.title}
      </h3>

      <div className="flex items-center gap-2 mb-4">
        <Users className="w-4 h-4 text-slate-400" />
        <span className="text-sm text-slate-600 font-medium">
          {job.experience}
        </span>
      </div>

      <p className="text-slate-500 text-sm mb-6 line-clamp-3 flex-grow">
        {job.description}
      </p>

      <div className="mt-auto pt-4 border-t border-slate-100 flex justify-between items-center">
        <span className="text-blue-600 font-semibold text-sm">
          View Details
        </span>
        <div className="bg-blue-50 p-2 rounded-full group-hover:bg-blue-600 transition-colors">
          <ChevronRight className="w-4 h-4 text-blue-600 group-hover:text-white transition-colors" />
        </div>
      </div>
    </div>
  );
};

// Job Details Modal
const Modal = ({ job, onClose, onApply, formatDate }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative bg-white rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-slate-100 rounded-full hover:bg-slate-200 transition-colors"
        >
          <X className="w-5 h-5 text-slate-600" />
        </button>

        <div className="p-8">
          <div className="mb-6">
            <h2 className="text-3xl font-bold text-slate-900 mb-2">
              {job.title}
            </h2>
            <div className="flex flex-wrap gap-4 text-sm text-slate-600">
              <span className="flex items-center gap-1 bg-blue-50 text-blue-700 px-3 py-1 rounded-full font-medium">
                <Users className="w-4 h-4" /> {job.experience}
              </span>
              <span className="flex items-center gap-1 bg-slate-100 px-3 py-1 rounded-full">
                <Clock className="w-4 h-4" /> Posted:{" "}
                {formatDate(job.createdAt)}
              </span>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-slate-800 mb-2 flex items-center gap-2">
                <div className="w-1 h-6 bg-blue-500 rounded-full"></div>
                Description
              </h3>
              <p className="text-slate-600 leading-relaxed whitespace-pre-wrap">
                {job.description}
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-slate-800 mb-2 flex items-center gap-2">
                <div className="w-1 h-6 bg-blue-500 rounded-full"></div>
                Skills Required
              </h3>

              <div className="flex flex-wrap gap-2">
                {job.skills
                  .split(/\n|,/)
                  .map((skill) => skill.trim())
                  .filter((skill) => skill.length > 0)
                  .map((skill, i) => (
                    <span
                      key={i}
                      className="bg-slate-100 text-slate-700 px-3 py-1 rounded-lg text-sm font-medium border border-slate-200"
                    >
                      {skill}
                    </span>
                  ))}
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col md:flex-row gap-4 justify-between items-center">
            <div className="text-slate-500 text-sm">
              Interested in this role?
            </div>
            <button
              onClick={onApply}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-bold flex items-center gap-2 shadow-lg shadow-blue-500/30 transition-all hover:scale-105 active:scale-95 w-full md:w-auto justify-center"
            >
              Apply Now <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};


const ApplicationForm = ({ job, onClose, onBack }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch(`${BASE_URL}/api/career/apply`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          contact: formData.contact,
          message: formData.message,
          jobTitle: job.title,
          jobId: job._id,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus("success");
        setTimeout(() => {
          onClose();
        }, 3000);
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Application submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative bg-white rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-slate-100 rounded-full hover:bg-slate-200 transition-colors z-10"
        >
          <X className="w-5 h-5 text-slate-600" />
        </button>

        <div className="p-8">
          {submitStatus === "success" ? (
            <div className="text-center py-12">
              <div className="bg-green-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-12 h-12 text-green-500" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                Application Submitted!
              </h3>
              <p className="text-slate-600">
                Thank you for applying. We'll review your application and get
                back to you soon.
              </p>
            </div>
          ) : (
            <>
              <div className="mb-6">
                <button
                  onClick={onBack}
                  className="text-blue-600 hover:text-blue-700 font-medium mb-4 flex items-center gap-2"
                >
                  <ChevronRight className="w-4 h-4 rotate-180" /> Back to Job
                  Details
                </button>
                <h2 className="text-3xl font-bold text-slate-900 mb-2">
                  Apply for {job.title}
                </h2>
                <p className="text-slate-600">
                  Fill out the form below and we'll get back to you soon.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="enter your full name "
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="sample@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="contact"
                    value={formData.contact}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="+91 1234567890"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                    placeholder="Tell us why you're interested in this position..."
                  />
                </div>

                {submitStatus === "error" && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl">
                    Failed to submit application. Please try again.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-slate-400 text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-blue-500/30 transition-all hover:scale-105 active:scale-95 disabled:hover:scale-100"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Submitting...
                    </>
                  ) : (
                    <>
                      Submit Application <Send className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};



export default Career;