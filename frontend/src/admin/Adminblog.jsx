import React, { useEffect, useState, useRef, useMemo } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { Pencil, Trash2, FileText, Plus, X, Upload } from "lucide-react";
import { toast } from "react-hot-toast";
import { BASE_URL } from "../Apipath.jsx";
import JoditEditor from "jodit-react";

// Reusable Jodit-based editor bound to parent form.state
const BlogContentEditor = ({ value, onChange }) => {
  const editor = useRef(null);

  const config = useMemo(
    () => ({
      readonly: false,
      placeholder: "Write your blog content...",
      height: 600,
      theme: "default",
      toolbarAdaptive: false,
      toolbarSticky: false,
      controls: {
        fontsize: {
          list: Array.from({ length: 100 }, (_, i) => `${i + 1}`),
        },
      },
    }),
    []
  );

  return (
    <div className="rounded-xl border-2 overflow-hidden border-gray-300 bg-white">
      <JoditEditor
        ref={editor}
        value={value}
        config={config}
        tabIndex={1}
        onBlur={(newContent) => onChange(newContent)}
        onChange={() => {}}
      />
    </div>
  );
};

const AdminBlog = () => {
  const [blogs, setBlogs] = useState([]);
  const [form, setForm] = useState({
    title: "",
    description: "",
    content: "",
  });
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState("");
  const [editMode, setEditMode] = useState(null);
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef(null);

  // Load all blogs
  const loadBlogs = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${BASE_URL}/api/blogs/all`);
      setBlogs(res.data.blogs || []);
    } catch (err) {
      console.log(err);
      toast.error("Failed to load blogs!");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadBlogs();
  }, []);

  // Handle image selection
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Check file size (5MB limit)
      if (file.size > 5 * 1024 * 1024) {
        toast.error("Image size should be less than 5MB");
        return;
      }

      setImageFile(file);

      // Create preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Remove image
  const removeImage = () => {
    setImageFile(null);
    setImagePreview("");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  // Create blog
  const createBlog = async () => {
    try {
      const formData = new FormData();
      formData.append("title", form.title);
      formData.append("description", form.description);
      formData.append("content", form.content);

      if (imageFile) {
        formData.append("image", imageFile);
      }

      await axios.post(`${BASE_URL}/api/blogs/create`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setForm({ title: "", description: "", content: "" });
      setImageFile(null);
      setImagePreview("");
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }

      loadBlogs();
      toast.success("Blog created successfully!");
    } catch (err) {
      console.log(err);
      toast.error(err.response?.data?.message || "Failed to create blog!");
    }
  };

  // Save edited blog
  const saveBlog = async () => {
    try {
      const formData = new FormData();
      formData.append("title", form.title);
      formData.append("description", form.description);
      formData.append("content", form.content);

      if (imageFile) {
        formData.append("image", imageFile);
      }

      await axios.put(`${BASE_URL}/api/blogs/edit/${editMode}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setEditMode(null);
      setForm({ title: "", description: "", content: "" });
      setImageFile(null);
      setImagePreview("");
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }

      loadBlogs();
      toast.success("Blog updated successfully!");
    } catch (err) {
      console.log(err);
      toast.error(err.response?.data?.message || "Failed to update blog!");
    }
  };

  // Delete blog
  const deleteBlog = async (id) => {
    toast((t) => (
      <div className="flex flex-col gap-3">
        <p className="font-semibold">
          Are you sure you want to delete this blog?
        </p>
        <div className="flex gap-3">
          <button
            onClick={async () => {
              toast.dismiss(t.id);
              try {
                await axios.delete(`${BASE_URL}/api/blogs/delete/${id}`);
                loadBlogs();
                toast.success("Blog deleted successfully!");
              } catch (err) {
                console.log(err);
                toast.error("Failed to delete blog!");
              }
            }}
            className="px-3 py-1 bg-red-600 text-white rounded-md"
          >
            Yes
          </button>
          <button
            onClick={() => toast.dismiss(t.id)}
            className="px-3 py-1 bg-gray-300 text-black rounded-md"
          >
            No
          </button>
        </div>
      </div>
    ));
  };

  // Start edit
  const startEdit = (blog) => {
    setEditMode(blog._id);
    setForm({
      title: blog.title || "",
      description: blog.description || "",
      content: blog.content || "",
    });

    // Set existing image preview if available
    if (blog.image) {
      setImagePreview(blog.image);
      setImageFile(null); // Clear file input as we're showing existing image
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Cancel edit
  const cancelEdit = () => {
    setEditMode(null);
    setForm({ title: "", description: "", content: "" });
    setImageFile(null);
    setImagePreview("");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900">
          Blog Management
        </h1>
        <p className="text-lg text-gray-600">
          Create and manage your blog posts
        </p>
      </div>

      {/* Create/Edit Blog Form */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`mb-10 rounded-2xl p-6 shadow-xl border ${
          editMode
            ? "bg-gradient-to-br from-indigo-50 to-purple-50 border-indigo-200"
            : "bg-gradient-to-br from-emerald-50 to-teal-50 border-emerald-200"
        }`}
      >
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            {editMode ? (
              <Pencil className="w-6 h-6 text-indigo-600" />
            ) : (
              <Plus className="w-6 h-6 text-emerald-600" />
            )}
            <h2 className="text-2xl font-bold text-gray-900">
              {editMode ? "Edit Blog Post" : "Create New Blog Post"}
            </h2>
          </div>
          {editMode && (
            <button
              onClick={cancelEdit}
              className="p-2 rounded-lg hover:bg-white/10 transition-all text-gray-600"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        <div className="space-y-4">
          {/* Image Upload Field */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Blog Image
            </label>
            <div className="space-y-3">
              {imagePreview ? (
                <div className="relative rounded-xl overflow-hidden border-2 border-emerald-300 bg-white">
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="w-full h-64  object-cover "
                  />
                  <button
                    onClick={removeImage}
                    className="absolute top-3 right-3 p-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all shadow-lg"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <div
                  onClick={() => fileInputRef.current?.click()}
                  className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center cursor-pointer hover:border-emerald-500 hover:bg-white/50 transition-all"
                >
                  <Upload className="w-12 h-12 mx-auto mb-3 text-gray-400" />
                  <p className="text-sm text-gray-600 mb-1">
                    Click to upload image
                  </p>
                  <p className="text-xs text-gray-400">
                    PNG, JPG, GIF up to 5MB
                  </p>
                </div>
              )}
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
              />
            </div>
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Blog Title *
            </label>
            <input
              type="text"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border-2 outline-none transition-all bg-white border-gray-300 text-gray-900 focus:border-emerald-500"
              placeholder="Enter blog title"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Short Description *
            </label>
            <input
              type="text"
              value={form.description}
              onChange={(e) =>
                setForm({ ...form, description: e.target.value })
              }
              className="w-full px-4 py-3 rounded-xl border-2 outline-none transition-all bg-white border-gray-300 text-gray-900 focus:border-emerald-500"
              placeholder="Brief description"
            />
          </div>

          {/* Blog Content with JoditEditor */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Blog Content *
            </label>
            <BlogContentEditor
              value={form.content}
              onChange={(content) => setForm({ ...form, content })}
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={editMode ? saveBlog : createBlog}
            disabled={
              !form.title || !form.description || !form.content || loading
            }
            className="px-8 py-3 rounded-xl font-bold text-white shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed bg-gradient-to-r from-emerald-500 to-teal-600"
          >
            {loading
              ? "Processing..."
              : editMode
              ? "Update Blog"
              : "Create Blog"}
          </motion.button>
        </div>
      </motion.div>

      {/* Blogs List */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-2xl p-6 shadow-xl border bg-white/90 border-indigo-100"
      >
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <FileText className="w-6 h-6 text-indigo-600" />
            <h2 className="text-2xl font-bold text-gray-900">
              All Blog Posts ({blogs.length})
            </h2>
          </div>
          {loading && (
            <span className="text-sm text-emerald-600">Loading...</span>
          )}
        </div>

        {blogs.length === 0 ? (
          <div className="text-center py-12">
            <FileText className="w-12 h-12 mx-auto mb-4 text-gray-400" />
            <p className="text-lg text-gray-500">
              No blogs yet. Create your first post!
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {blogs.map((blog) => (
              <motion.div
                key={blog._id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                whileHover={{ scale: 1.01 }}
                className="rounded-xl p-5 border-l-4 shadow-md hover:shadow-lg transition-all bg-white border-emerald-400"
              >
                <div className="flex items-start gap-4">
                  {blog.image && (
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-24 h-24 object-cover rounded-lg flex-shrink-0"
                    />
                  )}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-bold mb-2 text-gray-900">
                      {blog.title}
                    </h3>
                    <p className="text-sm text-gray-600">{blog.description}</p>
                  </div>
                  <div className="flex gap-2 flex-shrink-0">
                    <button
                      onClick={() => startEdit(blog)}
                      className="p-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white transition-all"
                      title="Edit"
                    >
                      <Pencil className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => deleteBlog(blog._id)}
                      className="p-2 rounded-lg bg-red-600 hover:bg-red-700 text-white transition-all"
                      title="Delete"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default AdminBlog;
