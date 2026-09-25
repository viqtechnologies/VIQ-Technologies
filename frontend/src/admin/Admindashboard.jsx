import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FileText, Briefcase, LogOut, Menu, X } from "lucide-react";
import { toast } from "react-hot-toast";
import AdminBlog from "../admin/Adminblog.jsx";
import JobPosting from "../admin/Jobposting.jsx";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("blog");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Check token expiry
  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    const expiry = localStorage.getItem("tokenExpiry");

    if (!token || Date.now() > parseInt(expiry)) {
      toast.error("Session expired. Please login again.");
      localStorage.clear();
      navigate("/tryhackme");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    localStorage.removeItem("tokenExpiry");
    toast.success("Logged out successfully!");
    navigate("/");
  };

  const menuItems = [
    {
      id: "blog",
      label: "Post Blog",
      icon: FileText,
    },
    {
      id: "job",
      label: "Post Job",
      icon: Briefcase,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-300 via-purple-50 to-cyan-200">
      {/* Mobile Menu Button */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-3 rounded-xl shadow-lg bg-white text-gray-900"
      >
        {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Sidebar */}
      <motion.aside
        initial={{ x: -300 }}
        animate={{ x: sidebarOpen || window.innerWidth >= 1024 ? 0 : -300 }}
        className="fixed top-0 left-0 h-full w-72 z-40 shadow-2xl border-r transition-transform lg:translate-x-0 bg-gray-200 border-indigo-200"
      >
        <div className="p-6">
          <h1 className="text-2xl font-bold mb-2 mt-10 text-gray-900">
            Admin Panel
          </h1>
          <p className="text-sm text-gray-600">Manage Ait content</p>
        </div>

        <nav className="px-4">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setSidebarOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-4 py-3 mb-2 rounded-xl font-medium transition-all ${
                  activeTab === item.id
                    ? "bg-emerald-500 text-white shadow-lg"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <Icon className="w-5 h-5" />
                {item.label}
              </button>
            );
          })}

          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 mt-8 rounded-xl font-medium transition-all bg-red-100 text-red-600 hover:bg-red-200"
          >
            <LogOut className="w-5 h-5" />
            Logout
          </button>
        </nav>
      </motion.aside>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="lg:hidden fixed inset-0 bg-black/50 z-30"
        />
      )}

      {/* Main Content */}
      <main className="lg:ml-72 min-h-screen">
        <div className="pt-20 lg:pt-0">
          {activeTab === "blog" && <AdminBlog />}
          {activeTab === "job" && <JobPosting />}
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
