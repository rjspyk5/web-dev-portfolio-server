const { uploadProjectsModel } = require("../model/projectModel");

module.exports = {
  uploadProjects: async (req, res) => {
    const data = req?.body;
    const result = await uploadProjectsModel(data);
    console.log(result);
  },
};
