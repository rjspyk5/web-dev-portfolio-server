const {
  uploadProjectsModel,
  getAllProjects,
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
};
