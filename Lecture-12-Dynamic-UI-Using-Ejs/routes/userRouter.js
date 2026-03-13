// Ecternal Module
const express = require("express");
// Core module
const path = require("path");
// ship router from express called express core module
const userRouter = express.Router();
// Local Module
const rootdir = require("../utils/pathUtils");
const { registeredHomes } = require("./hostRouter");

userRouter.get("/", (req, res, next) => {
  console.log(registeredHomes);
  res.render("home", {
    homes: registeredHomes,
    pagetitle: "Airbnb - Where You Find Home",
  });
});

module.exports = userRouter;
