const { login } = require("../model/authModel");
require("dotenv").config();
var jwt = require("jsonwebtoken");

module.exports = {
  login: async (req, res) => {
    const { email, password } = req.body;
    try {
      const result = await login(email);
      if (!result) return res.status(200).send({ message: "User not found" });

      if (result?.password !== password)
        return res
          .status(200)
          .send({ message: "Password didn't match,try again later" });

      const token = jwt.sign(
        {
          email: result.email,
        },
        process.env.TOKENSECRET,
        { expiresIn: "30d" }
      );

      return res.status(200).send({ message: "Login Successfull", token });
    } catch (error) {
      return res
        .status(400)
        .send({ message: "Server having some issues", error });
    }
  },
};
