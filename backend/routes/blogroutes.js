// import express from "express";
// import Blog from "../models/blog.js";
// import upload from "../config/multer.js";
// import imagekit from "../config/imagekit.js";

// const router = express.Router();

// // ✅ CREATE BLOG WITH IMAGE
// router.post("/create", upload.single("image"), async (req, res) => {
//   try {
//     const { title, description, content } = req.body;

//     if (!title || !description || !content) {
//       return res.status(400).json({
//         success: false,
//         message: "Title, description, and content are required",
//       });
//     }

//     let imageUrl = "";
//     let imageFileId = "";

//     // Upload image to ImageKit if provided
//     if (req.file) {
//       try {
//         const uploadResponse = await imagekit.upload({
//           file: req.file.buffer,
//           fileName: `blog_${Date.now()}_${req.file.originalname}`,
//           folder: "/blogs",
//         });

//         imageUrl = uploadResponse.url;
//         imageFileId = uploadResponse.fileId;
//       } catch (uploadError) {
//         console.error("ImageKit Upload Error:", uploadError);
//         return res.status(500).json({
//           success: false,
//           message: "Failed to upload image",
//         });
//       }
//     }

//     const blog = new Blog({
//       title,
//       description,
//       content,
//       image: imageUrl,
//       imageFileId: imageFileId,
//     });

//     await blog.save();

//     res.status(201).json({
//       success: true,
//       message: "Blog created successfully!",
//       blog,
//     });
//   } catch (error) {
//     console.error("CREATE ERROR:", error);
//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// });

// // ✅ GET ALL BLOGS
// router.get("/all", async (req, res) => {
//   try {
//     const blogs = await Blog.find().sort({ createdAt: -1 });

//     res.status(200).json({
//       success: true,
//       blogs,
//     });
//   } catch (error) {
//     console.error("GET ALL ERROR:", error);
//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// });

// // ✅ GET SINGLE BLOG
// router.get("/:id", async (req, res) => {
//   try {
//     const blog = await Blog.findById(req.params.id);

//     if (!blog) {
//       return res.status(404).json({
//         success: false,
//         message: "Blog not found",
//       });
//     }

//     res.status(200).json({
//       success: true,
//       blog,
//     });
//   } catch (error) {
//     console.error("GET SINGLE ERROR:", error);
//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// });

// // ✅ EDIT BLOG WITH IMAGE
// router.put("/edit/:id", upload.single("image"), async (req, res) => {
//   try {
//     const { title, description, content } = req.body;

//     if (!title || !description || !content) {
//       return res.status(400).json({
//         success: false,
//         message: "Title, description, and content are required",
//       });
//     }

//     const existingBlog = await Blog.findById(req.params.id);

//     if (!existingBlog) {
//       return res.status(404).json({
//         success: false,
//         message: "Blog not found",
//       });
//     }

//     let imageUrl = existingBlog.image;
//     let imageFileId = existingBlog.imageFileId;

//     // If new image is uploaded
//     if (req.file) {
//       try {
//         // Delete old image from ImageKit if exists
//         if (existingBlog.imageFileId) {
//           try {
//             await imagekit.deleteFile(existingBlog.imageFileId);
//           } catch (deleteError) {
//             console.warn("Old image deletion warning:", deleteError.message);
//           }
//         }

//         // Upload new image
//         const uploadResponse = await imagekit.upload({
//           file: req.file.buffer,
//           fileName: `blog_${Date.now()}_${req.file.originalname}`,
//           folder: "/blogs",
//         });

//         imageUrl = uploadResponse.url;
//         imageFileId = uploadResponse.fileId;
//       } catch (uploadError) {
//         console.error("ImageKit Upload Error:", uploadError);
//         return res.status(500).json({
//           success: false,
//           message: "Failed to upload new image",
//         });
//       }
//     }

//     const blog = await Blog.findByIdAndUpdate(
//       req.params.id,
//       {
//         title,
//         description,
//         content,
//         image: imageUrl,
//         imageFileId: imageFileId,
//       },
//       { new: true, runValidators: true }
//     );

//     res.status(200).json({
//       success: true,
//       message: "Blog updated successfully!",
//       blog,
//     });
//   } catch (error) {
//     console.error("EDIT ERROR:", error);
//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// });

// // ✅ DELETE BLOG
// router.delete("/delete/:id", async (req, res) => {
//   try {
//     const blog = await Blog.findById(req.params.id);

//     if (!blog) {
//       return res.status(404).json({
//         success: false,
//         message: "Blog not found",
//       });
//     }

//     // Delete image from ImageKit if exists
//     if (blog.imageFileId) {
//       try {
//         await imagekit.deleteFile(blog.imageFileId);
//       } catch (deleteError) {
//         console.warn("Image deletion warning:", deleteError.message);
//       }
//     }

//     await Blog.findByIdAndDelete(req.params.id);

//     res.status(200).json({
//       success: true,
//       message: "Blog deleted successfully!",
//     });
//   } catch (error) {
//     console.error("DELETE ERROR:", error);
//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// });

// export default router;



import express from "express";
import Blog from "../models/blog.js";
import upload from "../config/multer.js";
import imagekit from "../config/imagekit.js";
import redisClient from "../config/redis.js"; 

const router = express.Router();


const clearBlogCache = async (id = null) => {
  try {
    await redisClient.del("blogs:all"); // Clear the "all blogs" list
    if (id) {
      await redisClient.del(`blog:${id}`); // Clear specific blog detail
    }
    console.log("♻️ Redis Cache Cleared");
  } catch (err) {
    console.error("Redis Clear Error:", err);
  }
};


router.post("/create", upload.single("image"), async (req, res) => {
  try {
    const { title, description, content } = req.body;

    if (!title || !description || !content) {
      return res
        .status(400)
        .json({
          success: false,
          message: "Title, description, and content are required",
        });
    }

    let imageUrl = "";
    let imageFileId = "";

    if (req.file) {
      const uploadResponse = await imagekit.upload({
        file: req.file.buffer,
        fileName: `blog_${Date.now()}_${req.file.originalname}`,
        folder: "/blogs",
      });
      imageUrl = uploadResponse.url;
      imageFileId = uploadResponse.fileId;
    }

    const blog = new Blog({
      title,
      description,
      content,
      image: imageUrl,
      imageFileId,
    });
    await blog.save();

    // Clear cache because new data exists
    await clearBlogCache();

    res
      .status(201)
      .json({ success: true, message: "Blog created successfully!", blog });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

//  GET ALL BLOGS (With Caching)
router.get("/all", async (req, res) => {
  try {
    const cacheKey = "blogs:all";

    // Check Redis Cache
    const cachedBlogs = await redisClient.get(cacheKey);
    if (cachedBlogs) {
      return res.status(200).json({
        success: true,
        source: "redis",
        blogs: JSON.parse(cachedBlogs),
      });
    }

    //  Fetch from DB if no cache
    const blogs = await Blog.find().sort({ createdAt: -1 });

    //  Save to Redis (Expire in 1 hr)
    await redisClient.setEx(cacheKey, 3600, JSON.stringify(blogs));

    res.status(200).json({ success: true, source: "database", blogs });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// GET SINGLE BLOG (With Caching)
router.get("/:id", async (req, res) => {
  try {
    const cacheKey = `blog:${req.params.id}`;

    // 1. Check Redis Cache
    const cachedBlog = await redisClient.get(cacheKey);
    if (cachedBlog) {
      return res.status(200).json({
        success: true,
        source: "redis",
        blog: JSON.parse(cachedBlog),
      });
    }

    // 2. Fetch from DB
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      return res
        .status(404)
        .json({ success: false, message: "Blog not found" });
    }

    // 3. Save to Redis (Expire in 1 hour)
    await redisClient.setEx(cacheKey, 3600, JSON.stringify(blog));

    res.status(200).json({ success: true, source: "database", blog });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

//  EDIT BLOG k
router.put("/edit/:id", upload.single("image"), async (req, res) => {
  try {
    const { title, description, content } = req.body;
    const existingBlog = await Blog.findById(req.params.id);

    if (!existingBlog) {
      return res
        .status(404)
        .json({ success: false, message: "Blog not found" });
    }

    let imageUrl = existingBlog.image;
    let imageFileId = existingBlog.imageFileId;

    if (req.file) {
      if (existingBlog.imageFileId) {
        try {
          await imagekit.deleteFile(existingBlog.imageFileId);
        } catch (e) {}
      }
      const uploadResponse = await imagekit.upload({
        file: req.file.buffer,
        fileName: `blog_${Date.now()}_${req.file.originalname}`,
        folder: "/blogs",
      });
      imageUrl = uploadResponse.url;
      imageFileId = uploadResponse.fileId;
    }

    const blog = await Blog.findByIdAndUpdate(
      req.params.id,
      { title, description, content, image: imageUrl, imageFileId },
      { new: true },
    );

    // Clear cache for list and specific blog
    await clearBlogCache(req.params.id);

    res
      .status(200)
      .json({ success: true, message: "Blog updated successfully!", blog });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// DELETE BLOG
router.delete("/delete/:id", async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog)
      return res
        .status(404)
        .json({ success: false, message: "Blog not found" });

    if (blog.imageFileId) {
      try {
        await imagekit.deleteFile(blog.imageFileId);
      } catch (e) {}
    }

    await Blog.findByIdAndDelete(req.params.id);

    // Clear cache
    await clearBlogCache(req.params.id);

    res
      .status(200)
      .json({ success: true, message: "Blog deleted successfully!" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

export default router;