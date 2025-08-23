//   External Module
const express = require("express");
const hostRouter = express.Router();

// Core Module
const path = require("path");

// Local Module
const rootDir = require("../utils/pathUtil");
hostRouter.get("/add-home", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "add-home.html"));
});
hostRouter.post("/add-home", (req, res, next) => {
  console.log(req.body);
  res.sendFile(path.join(rootDir, "views", "addedHome.html"));
});

module.exports = hostRouter;
