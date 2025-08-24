// External Module
const express = require("express");
const homeRouter = express.Router();
//   Core Module
const path = require("path");
// Local Module
const rootDir = require("../utils/utilsPath");
homeRouter.get("/", (req, res, next) => {
  console.log(req.url, req.method);
  res.sendFile(path.join(rootDir, "views", "home.html"));
  // next();
});
module.exports = homeRouter;
