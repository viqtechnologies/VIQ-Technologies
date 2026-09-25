// src/pages/BlogDetail.jsx (adjust path as per your structure)
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";
import { Calendar, ArrowLeft, ImageIcon } from "lucide-react";
import { BASE_URL } from "../Apipath.jsx";
import slugify from "slugify";

const decodeHTMLEntities = (text) => {
  const textArea = document.createElement("textarea");
  textArea.innerHTML = text;
  return textArea.value;
};

const processContent = (content) => {
  if (!content) return "";
  if (content.includes("&lt;") || content.includes("&gt;")) {
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

const formatDate = (isoString) => {
  const options = { year: "numeric", month: "short", day: "numeric" };
  return new Date(isoString).toLocaleDateString(undefined, options);
};

const BlogDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadBlog = async () => {
      try {
        setLoading(true);
        setError(null);

        // Get all blogs (you can replace this with a single-blog API if you add it)
        const res = await axios.get(`${BASE_URL}/api/blogs/all`);
        const blogs = res.data.blogs || [];

        // Find blog whose generated slug matches URL slug
        const found = blogs.find((b) => generateSlug(b) === slug);

        if (!found) {
          setError("Blog not found.");
        } else {
          found.content = processContent(found.content);
          setBlog(found);
        }
      } catch (err) {
        console.error("Error loading blog:", err);
        setError("Failed to load blog.");
      } finally {
        setLoading(false);
      }
    };

    loadBlog();
  }, [slug]);

  return (
    <section className="min-h-screen py-8 px-3 sm:px-5 lg:px-8 bg-gradient-to-br from-white via-blue-50 to-blue-100">
      <div className="max-w-7xl mx-auto mt-8">
        {/* Back button */}

        <button
          onClick={() => navigate(-1)}
          className="mb-6 p-2 pl-2 pr-3   rounded-4xl inline-flex items-center gap-2 text-lg font-semibold text-white  bg-blue-600 hover:bg-blue-900 active:scale-80"
        >
          <ArrowLeft className="w-4 h-4 animate-float-left" />
          Back to Blogs
        </button>

        {/* Loading */}
        {loading && (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-3 border-t-transparent border-blue-500" />
            <p className="mt-3 text-base font-medium text-blue-800/80">
              Loading blog...
            </p>
          </div>
        )}

        {/* Error */}
        {error && !loading && (
          <div className="text-center py-12">
            <p className="text-lg text-red-600">{error}</p>
          </div>
        )}

        {/* Blog content */}
        {!loading && !error && blog && (
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl overflow-hidden shadow-xl bg-white border border-blue-100"
          >
            {/* Image / header */}
            {blog.image ? (
              <div className="relative w-full h-68 sm:h-76 md:h-92 lg:h-160 bg-gradient-to-br from-blue-100 to-sky-100 overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                />
                {/* Date badge */}
                <div className="absolute top-4 right-4">
                  <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full shadow-lg bg-white/90 backdrop-blur-sm border border-blue-200/60">
                    <Calendar className="w-3.5 h-3.5 text-blue-600" />
                    <span className="text-xs font-semibold text-blue-800">
                      {formatDate(blog.createdAt)}
                    </span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="relative w-full h-64 flex items-center justify-center bg-gradient-to-br from-blue-100 to-sky-100">
                <ImageIcon className="w-16 h-16 text-blue-300" />
                <div className="absolute top-4 right-4">
                  <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full shadow-lg bg-white/90 backdrop-blur-sm border border-blue-200/60">
                    <Calendar className="w-3.5 h-3.5 text-blue-600" />
                    <span className="text-xs font-semibold text-blue-800">
                      {formatDate(blog.createdAt)}
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Body */}
            <div className="p-6 md:p-8">
              {/* Title */}
              <h1
                className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-3  "
               
              >
                {blog.title}
              </h1>

              {/* Short description */}
              <p
                className="text-base md:text-lg  text-gray-800 bg-blue-50 border border-blue-100 rounded-xl px-4 py-3 mb-6"
               
              >
                "{blog.description}"
              </p>

              {/* Full content */}
              <div
                className=" prose max-w-none text-gray-800 text-justify"
                
                dangerouslySetInnerHTML={{ __html: blog.content }}
              />
            </div>
          </motion.article>
        )}
      </div>

      {/* Same content styling as list page */}
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
      `}</style>
    </section>
  );
};

export default BlogDetail;
