const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  name: String,
  description: String,
  technologies: Array,
  clientCode: String,
  githubCode: String,
  liveLink: String,
  image: String,
  features: Array,
});

const projects = mongoose.model("projects", projectSchema);
const uploadProjectsModel = async (data) => await projects.create(data);
const getAllProjects = async () => await projects.find();
const getProject = async (id) => await projects.findOne({ _id: id });
const deleteProject = async (id) => await projects.deleteOne({ _id: id });
const updateProject = async (id, data) =>
  await projects.updateOne(
    { _id: id },
    { $set: data },
    { runValidators: true }
  );

module.exports = {
  uploadProjectsModel,
  getAllProjects,
  deleteProject,
  getProject,
  updateProject,
};
