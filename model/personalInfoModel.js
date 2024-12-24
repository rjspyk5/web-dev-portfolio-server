const mongoose = require("mongoose");
const personalInfoSchema = new mongoose.Schema({
  name: String,
  number: Number,
  email: String,
  adress: String,
  linkedin: String,
  facebook: String,
  github: String,
  birthday: String,
});

const personalInfo = mongoose.model("personalInfo", personalInfoSchema);

module.exports = {
  getInfo: async () => await personalInfo.find(),
  insertInfo: async (data) => await personalInfo.create(data),
};
