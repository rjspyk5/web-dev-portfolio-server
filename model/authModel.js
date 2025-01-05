const mongoose = require("mongoose");
const authSchema = new mongoose.Schema({
  email: String,
  password: String,
});

const authModel = mongoose.model("auth", authSchema);

const login = async (email) => await authModel.findOne({ email: email });

module.exports = { login };
