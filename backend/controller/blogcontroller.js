import Blog from "../models/blog.js";

// Get all blogs
export const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      blogs,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Edit blog
export const editBlog = async (req, res) => {
  try {
    const { title, description, content } = req.body;

    const updated = await Blog.findByIdAndUpdate(
      req.params.id,
      { title, description, content },
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "Blog updated successfully",
      updated,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Delete blog
export const deleteBlog = async (req, res) => {
  try {
    await Blog.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "Blog deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
