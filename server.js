const express = require("express");
const projectRouter = require("./Router/projectRouter");
const server = express();
server.use(express.json());
server.use("/api", projectRouter);
server.get("/", (req, res) => {
  res.status(200).json({ Hello: "From server.js" });
});
module.exports = server;
