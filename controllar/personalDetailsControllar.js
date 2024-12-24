const personalInfoModel = require("../model/personalInfoModel");

module.exports = {
  getPersonalInfo: async (req, res) => {
    const result = await personalInfoModel.getInfo();
    res.send(result);
  },
  insertPersonalInfo: async (req, res) => {
    const data = req.body;
    const result = await personalInfoModel.insertInfo(data);
    res.send(result);
  },
  updatePersonalInfo: async (req, res) => {},
};
