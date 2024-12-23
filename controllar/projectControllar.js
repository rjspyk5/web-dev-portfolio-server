const {
  uploadProjectsModel,
  getAllProjects,
  deleteProject,
} = require("../model/projectModel");

module.exports = {
  uploadProjects: async (req, res) => {
    const data = req?.body;
    const result = await uploadProjectsModel(data);
    res.send(result);
  },
  getProjects: async (req, res) => {
    const result = await getAllProjects();
    console.log(result);
    res.send(result);
  },
  deleteProjects: async (req, res) => {
    const id = req.params.id;
    const result = await deleteProject(id);
    res.send(result);
  },
  updateProjects: async (req, res) => {
    const id = req.params.id;
    console.log(id);
  },
};
