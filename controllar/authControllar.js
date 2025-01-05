const { login } = require("../model/authModel");

module.exports = {
  login: async (req, res) => {
    const email = req.query.email;
    const result = await login(email);

    console.log(result);
    return result;
  },
};
