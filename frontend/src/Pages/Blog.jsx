import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";
import { Calendar, BookOpen, ChevronDown, ImageIcon } from "lucide-react";
import { BASE_URL } from "../Apipath.jsx";
import slugify from "slugify";

const Blog = () => {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadBlogs = async () => {
      try {
        setLoading(true);
        setError(null);
        const res = await axios.get(`${BASE_URL}/api/blogs/all`);
        setBlogs(res.data.blogs || []);
        // if (res.data.blogs && res.data.blogs.length > 0) {
        //   console.log("=== BLOG CONTENT DEBUG ===");
        //   console.log("First blog title:", res.data.blogs[0].title);
        //   console.log("First blog content (raw):", res.data.blogs[0].content);
        //   console.log("First blog image:", res.data.blogs[0].image);
        //   console.log("Content type:", typeof res.data.blogs[0].content);
        //   console.log(
        //     "First 200 chars:",
        //     res.data.blogs[0].content?.substring(0, 200)
        //   );
        //   const hasEntities =
        //     res.data.blogs[0].content?.includes("&lt;") ||
        //     res.data.blogs[0].content?.includes("&gt;");
        //   console.log("Contains HTML entities:", hasEntities);
        //   const hasHTMLTags =
        //     res.data.blogs[0].content?.includes("<p>") ||
        //     res.data.blogs[0].content?.includes("<strong>");
        //   console.log("Contains HTML tags:", hasHTMLTags);
        // }
      } catch (err) {
        console.error("Error loading blogs:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadBlogs();
  }, []);

  const formatDate = (isoString) => {
    const options = { year: "numeric", month: "short", day: "numeric" };
    return new Date(isoString).toLocaleDateString(undefined, options);
  };

  const decodeHTMLEntities = (text) => {
    const textArea = document.createElement("textarea");
    textArea.innerHTML = text;
    return textArea.value;
  };

  const processContent = (content) => {
    if (!content) return "";
    if (content.includes("&lt;") || content.includes("&gt;")) {
      console.log("Content has HTML entities - decoding...");
      return decodeHTMLEntities(content);
    }
    return content;
  };

  const generateSlug = (blog) => {
    if (blog.slug) return blog.slug;

    return (
      slugify(blog.title, {
        lower: true,
        strict: true,
        remove: /[*+~.()'"!:@]/g,
      }) +
      "-" +
      blog._id.slice(-6)
    );
  };

  const handleReadMore = (blog) => {
    const slug = generateSlug(blog);
    navigate(`/blog/${slug}`);
  };

  return (
    <section className="min-h-screen py-10 px-3 sm:px-5 lg:px-8 bg-gradient-to-br from-white via-blue-50 to-blue-100">
      <div className="max-w-6xl mx-auto ">
        {/* Header */}
        <div className="text-center mb-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl py-1 font-extrabold tracking-tight mb-2 bg-gradient-to-r from-blue-600 via-sky-600 to-indigo-600 bg-clip-text text-transparent"
          >
            ANSH InfoTech Blog Hub
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-sm md:text-lg max-w-5xl mx-auto text-blue-900/80"
          >
            Stay updated with expert tips, success stories, and guidance for IT
            Solutions from the AIT team.
          </motion.p>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="text-center py-8">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-3 border-t-transparent border-blue-500" />
            <p className="mt-3 text-base font-medium text-blue-800/80">
              Loading blog posts...
            </p>
          </div>
        )}

        {/* Error State */}
        {error && !loading && (
          <div className="text-center py-8">
            <p className="text-lg text-red-600">Error loading blogs: {error}</p>
          </div>
        )}

        {/* Blog List */}
        {!loading && !error && (
          <>
            {blogs.length === 0 ? (
              <div className="text-center py-16">
                <BookOpen className="w-12 h-12 mx-auto mb-4 text-blue-300" />
                <p className="text-lg text-blue-800/70">
                  No blog posts available yet.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {blogs.map((blog, index) => {
                  const processedContent = processContent(blog.content);

                  return (
                    <motion.article
                      key={blog._id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 0.5, delay: index * 0.05 }}
                      whileHover={{ y: -6 }}
                      className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 backdrop-blur-sm border bg-gradient-to-br from-white via-blue-50 to-blue-100 border-blue-100 hover:border-blue-400/60"
                    >
                      {/* Decorative gradient */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-80 transition-opacity duration-300 bg-gradient-to-br from-blue-200/40 to-sky-200/40" />

                      {/* Content wrapper */}
                      <div className="relative z-10 h-full flex flex-col">
                        {/* Blog Image */}
                        {blog.image ? (
                          <div className="relative w-full h-48 overflow-hidden bg-gradient-to-br from-blue-100 to-sky-100">
                            <img
                              loading="lazy"
                              decoding="async"
                              src={blog.image}
                              alt={blog.title}
                              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                              onError={(e) => {
                                e.target.style.display = "none";
                                e.target.parentElement.innerHTML = `
                                  <div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-100 to-sky-100">
                                    <svg class="w-16 h-16 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                  </div>
                                `;
                              }}
                            />
                            {/* Date Badge on Image */}
                            <div className="absolute top-3 right-3">
                              <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full shadow-lg bg-white/90 backdrop-blur-sm border border-blue-200/60">
                                <Calendar className="w-3.5 h-3.5 text-blue-600" />
                                <span className="text-xs font-semibold text-blue-800">
                                  {formatDate(blog.createdAt)}
                                </span>
                              </div>
                            </div>
                          </div>
                        ) : (
                          <div className="relative w-full h-48 flex items-center justify-center bg-gradient-to-br from-blue-100 to-sky-100">
                            <ImageIcon className="w-16 h-16 text-blue-300" />
                            {/* Date Badge when no image */}
                            <div className="absolute top-3 right-3">
                              <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full shadow-lg bg-white/90 backdrop-blur-sm border border-blue-200/60">
                                <Calendar className="w-3.5 h-3.5 text-blue-600" />
                                <span className="text-xs font-semibold text-blue-800">
                                  {formatDate(blog.createdAt)}
                                </span>
                              </div>
                            </div>
                          </div>
                        )}

                        {/* Content Section */}
                        <div className="p-5 md:p-6 flex flex-col flex-1">
                          {/* Title */}
                          <div className="mb-2">
                            <h3 className="text-xl md:text-2xl font-extrabold leading-tight mb-1 text-blue-900 line-clamp-3">
                              {blog.title}
                            </h3>
                          </div>

                          {/* Description */}
                          <div className="mb-4 p-3 rounded-xl bg-blue-50 border border-blue-100">
                            <p className="text-sm md:text-base leading-relaxed  text-blue-900/80 line-clamp-2">
                              "{blog.description}"
                            </p>
                          </div>

                          {/* Blog Content Preview */}
                          <div className="rounded-xl bg-white border border-blue-100 flex-1 flex flex-col">
                            <div
                              className="p-4 overflow-hidden"
                              style={{
                                maxHeight: "120px",
                                overflow: "hidden",
                              }}
                            >
                              <div
                                className="blog-content max-w-none text-sm md:text-base leading-relaxed text-blue-900/90"
                                dangerouslySetInnerHTML={{
                                  __html: processedContent,
                                }}
                              />
                            </div>

                            {/* View Full Article Button */}
                            <div className="px-4 pb-4 pt-0 mt-auto flex justify-center">
                              <motion.button
                                onClick={() => handleReadMore(blog)}
                                className="flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all duration-300 shadow-md bg-gradient-to-r from-blue-500 to-indigo-500 text-white hover:from-blue-400 hover:to-indigo-400 hover:shadow-blue-400/40 hover:shadow-xl border border-blue-300/60 text-sm"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.98 }}
                              >
                                View Full Blog
                                <ChevronDown className="w-4 h-4" />
                              </motion.button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.article>
                  );
                })}
              </div>
            )}
          </>
        )}
      </div>

      {/* Custom CSS for blog content */}
      <style jsx>{`
        .blog-content p {
          margin-bottom: 1em;
          line-height: 1.6;
        }
        .blog-content strong,
        .blog-content b {
          font-weight: 700;
        }
        .blog-content em,
        .blog-content i {
          font-style: italic;
        }
        .blog-content ul,
        .blog-content ol {
          margin-left: 1.5em;
          margin-bottom: 1em;
          padding-left: 0.5em;
        }
        .blog-content ul {
          list-style-type: disc;
        }
        .blog-content ol {
          list-style-type: decimal;
        }
        .blog-content li {
          margin-bottom: 0.5em;
        }
        .blog-content h1 {
          font-size: 2em;
          font-weight: 700;
          margin-top: 1em;
          margin-bottom: 0.5em;
        }
        .blog-content h2 {
          font-size: 1.75em;
          font-weight: 700;
          margin-top: 0.9em;
          margin-bottom: 0.5em;
        }
        .blog-content h3 {
          font-size: 1.5em;
          font-weight: 700;
          margin-top: 0.8em;
          margin-bottom: 0.5em;
        }
        .blog-content h4 {
          font-size: 1.25em;
          font-weight: 700;
          margin-top: 0.7em;
          margin-bottom: 0.5em;
        }
        .blog-content a {
          color: #2563eb;
          text-decoration: underline;
        }
        .blog-content a:hover {
          color: #1d4ed8;
        }
        .blog-content br {
          display: block;
          content: "";
          margin-top: 0.5em;
        }
        .blog-content blockquote {
          border-left: 4px solid #3b82f6;
          padding-left: 1em;
          margin: 1em 0;
          font-style: italic;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default Blog;
