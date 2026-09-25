import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { Lock, Mail, LogIn, Shield } from "lucide-react";
import { BASE_URL } from "../Apipath";
import { toast } from "react-hot-toast";

const AdminLogin = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!form.email || !form.password) {
      toast.error("Please fill in all fields");
      return;
    }

    try {
      setLoading(true);
      const res = await axios.post(`${BASE_URL}/admin/login`, form);
      if (res.data.success) {
        const expiry = new Date().getTime() + 24 * 60 * 60 * 1000;
        localStorage.setItem("adminToken", res.data.token);
        localStorage.setItem("tokenExpiry", expiry);
        window.location.href = "/accessgranted";
      }
    } catch (err) {
      toast.error("Invalid Email or Password");
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleLogin();
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center py-5 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-300 via-purple-50 to-cyan-200">
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        {/* Card Container */}
        <div className="rounded-3xl p-8 md:p-5 mt-6 shadow-2xl backdrop-blur-sm border bg-gradient-to-br from-white to-indigo-50 border-indigo-200">
          {/* Header Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="flex justify-center"
          >
            <div className="p-4 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg">
              <Shield className="w-12 h-12 text-white" />
            </div>
          </motion.div>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-center mb-8"
          >
            <h1 className="text-3xl md:text-4xl font-extrabold mb-2 text-gray-900">
              Admin Login
            </h1>
            <p className="text-sm md:text-base text-gray-600">
              Access your Ait dashboard
            </p>
          </motion.div>

          {/* Form */}
          <div className="space-y-6">
            {/* Email */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  onKeyPress={handleKeyPress}
                  className="w-full pl-12 pr-4 py-3.5 rounded-xl border-2 outline-none transition-all text-base font-medium bg-white border-indigo-300 text-gray-900 placeholder:text-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30"
                  placeholder="Enter your email"
                />
              </div>
            </motion.div>

            {/* Password */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  type="password"
                  value={form.password}
                  onChange={(e) =>
                    setForm({ ...form, password: e.target.value })
                  }
                  onKeyPress={handleKeyPress}
                  className="w-full pl-12 pr-4 py-3.5 rounded-xl border-2 outline-none transition-all text-base font-medium bg-white border-indigo-300 text-gray-900 placeholder:text-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30"
                  placeholder="Enter your password"
                />
              </div>
            </motion.div>

            {/* Login Button */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleLogin}
              disabled={loading || !form.email || !form.password}
              className="group relative w-full px-8 py-4 rounded-xl text-lg font-bold text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-600 shadow-2xl shadow-indigo-500/50 hover:shadow-indigo-500/70 transition-all flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>Logging in...</span>
                </div>
              ) : (
                <>
                  <span>Login to Dashboard</span>
                  <LogIn className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </motion.button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AdminLogin;
