import mongoose from "mongoose";

// Connect to database
// model/s creation
//  api routes -> add, fetch/get , update, delete

const BlogSchema = new mongoose.Schema({
  title: String,
  description: String,
});

const Blog = mongoose.models.Blog || mongoose.model("Blog", BlogSchema);

export default Blog;
