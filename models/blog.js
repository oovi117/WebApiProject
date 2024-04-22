const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BlogSchema = new Schema({
  title: { type: String, required: true, unique: true },
  description: { type: String },
  author: { type: Schema.Types.ObjectId, ref: "User", required: true },
  state: { type: String, enum: ["draft", "published"], default: "draft" },
  readCount: { type: Number, default: 0 },
  readingTime: { type: Number, default: 0 },
  tags: [{ type: String }],
  body: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
});

const Blog = mongoose.model("Blog", BlogSchema);
module.exports = Blog;
