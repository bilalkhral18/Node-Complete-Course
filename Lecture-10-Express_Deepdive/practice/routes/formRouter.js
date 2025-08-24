// External Module
const express = require("express");
const formRouter = express.Router();
// Core Module
const path = require("path");
// Local Modules
const rootDir = require("../utils/utilsPath");

formRouter.get("/contact-us", (req, res, next) => {
  console.log(req.url, req.method);
  res.sendFile(path.join(rootDir, "views", "form.html"));
});
formRouter.post("/contact-us", (req, res, next) => {
  console.log(req.url, req.method, req.body);
  res.sendFile(path.join(rootDir, "views", "submitform.html"));
});

module.exports = formRouter;
