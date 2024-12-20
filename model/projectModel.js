const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  name: String,
  description: String,
  technologies: String,
  clientCode: String,
  githubCode: String,
  liveLink: String,
  image: String,
  features: Array,
});

const projects = mongoose.model("projects", projectSchema);
