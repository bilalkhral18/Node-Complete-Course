// External Module
const express = require("express");
const userRouter = express.Router();
// Local Module
const rootDir = require("../utils/pathUtil");
const { registeredHomes } = require("./hostRouter");
// Core Module
const path = require("path");

userRouter.get("/", (req, res, next) => {
  console.log(registeredHomes);
  res.render("home", {
    homes: registeredHomes,
    pageTitle: "airbnb Home",
    currentPage: "Home",
  });
});

module.exports = userRouter;
