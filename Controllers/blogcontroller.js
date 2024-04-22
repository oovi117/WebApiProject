const Blog = require('../models/Blog');

// Get all blogs
exports.getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.status(200).json(blogs);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Create a new blog
exports.createBlog = async (req, res) => {
  try {
    const { title, description, tags, body } = req.body;
    const newBlog = new Blog({
      title,
      description,
      tags,
      body,
      author: req.user._id, // Assuming req.user is set by authentication middleware
    });
    await newBlog.save();
    res.status(201).json(newBlog);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Other controller functions like getBlogById, updateBlog, deleteBlog can follow similar patterns
