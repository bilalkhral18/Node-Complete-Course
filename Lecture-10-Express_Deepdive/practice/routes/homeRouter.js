// External Module
const express = require("express");
// Express Router
const homeRouter = express.Router();
// CORE Module
const path = require("path");
// Local Modules
const rootDir = require("../utils/utilsPath");
homeRouter.get("/", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "home.html"));
});
module.exports = homeRouter;
