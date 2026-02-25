const express = require("express");
// Express Router
const contactRouter = express.Router();
// CORE Module
const path = require("path");
// Local Module
const rootDir = require("../utils/utilsPath");
contactRouter.get("/contact-us", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "addDetails.html"));
});
contactRouter.post("/contact-us", (req, res, next) => {
  console.log(req.body.UserName, req.body.email);
  res.sendFile(path.join(rootDir, "views", "submitDetails.html"));
});
module.exports = contactRouter;
