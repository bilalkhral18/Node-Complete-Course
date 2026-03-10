const express = require("express");
// Core Module
const path = require("path");
// ship router from express called express core module
const hostRouter = express.Router();
// Local Module
const rootdir = require("../utils/pathUtils");
hostRouter.get("/add-home", (req, res, next) => {
  res.sendFile(path.join(rootdir, "views", "addHome.html"));
});
hostRouter.post("/add-home", (req, res, next) => {
  console.log(req.body);
  res.sendFile(path.join(rootdir, "views", "homeAdded.html"));
});

module.exports = hostRouter;
