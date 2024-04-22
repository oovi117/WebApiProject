const express = require("express");
const router = express.Router();
const blogController = require("../controllers/blogController");
const { authenticateUser } = require("../middlewares/authMiddleware");

router.get("/", blogController.getAllBlogs);
router.get("/:id", blogController.getBlogById);
router.post("/", authenticateUser, blogController.createBlog);
router.put("/:id", authenticateUser, blogController.updateBlog);
router.delete("/:id", authenticateUser, blogController.deleteBlog);

module.exports = router;
