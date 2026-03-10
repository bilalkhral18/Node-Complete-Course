// Ecternal Module
const express = require("express");
// Core module
const path = require("path");
// ship router from express called express core module
const userRouter = express.Router();
// Local Module
const rootdir = require("../utils/pathUtils");

userRouter.get("/", (req, res, next) => {
  res.sendFile(path.join(rootdir, "views", "home.html"));
});

module.exports = userRouter;
