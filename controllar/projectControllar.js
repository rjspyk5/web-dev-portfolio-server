const {
  uploadProjectsModel,
  getAllProjects,
  deleteProject,
  getProject,
  updateProject,
} = require("../model/projectModel");

module.exports = {
  uploadProjects: async (req, res) => {
    const data = req?.body;

    try {
      const result = await uploadProjectsModel(data);
      return res.send({ message: "Project upload successfully" });
    } catch (error) {
      return res.send({ message: "Something went wrong", error });
    }
  },
  getProjects: async (req, res) => {
    const result = await getAllProjects();
    return res.send(result);
  },
  getProject: async (req, res) => {
    const id = req.params.id;
    const result = await getProject(id);
    return res.send(result);
  },
  deleteProjects: async (req, res) => {
    const id = req.params.id;
    try {
      const result = await deleteProject(id);
      return res.send({ message: "Project deleted successfully" });
    } catch (error) {
      return res.send({ message: "Something went wrong", error });
    }
  },

  updateProjects: async (req, res) => {
    const id = req.params.id;
    const data = req?.body;

    try {
      const result = await updateProject(id, data);
      if (result?.modifiedCount) {
        return res.send({ message: "Project Update Successfully" });
      } else {
        return res.send({
          message: "Your given data and previous data is same",
        });
      }
    } catch (error) {
      return res.send({ message: "Something went wrong", error });
    }
  },
};
