const express = require("express");
const app = express();
const port = process.env.PORT ?? 3000;
const cors = require("cors");
const connectDb = require("./config/config");
const projectControllar = require("./controllar/projectControllar");
const personalDetailsControllar = require("./controllar/personalDetailsControllar");
const authControllar = require("./controllar/authControllar");
const authMiddleware = require("./Middleware/authMiddleware");

app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173", "https://rakibulim.web.app"],
    credentials: true,
    optionSuccessStatus: 200,
  })
);
connectDb();
// auth
app.post("/login", authControllar.login);

// project Related Api
app.post("/project", projectControllar.uploadProjects);
app.get("/projects", projectControllar.getProjects);
app.get("/project/:id", projectControllar.getProject);
app.delete("/project/:id", projectControllar.deleteProjects);
app.put("/project/:id", projectControllar.updateProjects);
// personal info
app.get("/personaldetails", personalDetailsControllar.getPersonalInfo);
app.post("/personaldetails", personalDetailsControllar.insertPersonalInfo);
app.put("/personaldetails", personalDetailsControllar.updatePersonalInfo);

app.listen(port, () => {
  console.log("server running");
});
