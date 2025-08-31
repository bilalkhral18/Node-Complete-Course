//   External Module
const express = require("express");
const hostRouter = express.Router();

// Core Module
const path = require("path");

// Local Module
const rootDir = require("../utils/pathUtil");
hostRouter.get("/add-home", (req, res, next) => {
  res.render("add-home", { pageTitle: "Add Home", currentPage: "Add Home" });
});
let registeredHomes = [];
hostRouter.post("/home_Added_Successfully", (req, res, next) => {
  console.log(req.body);
  registeredHomes.push(req.body);
  res.render("addedHome", {
    pageTitle: "Home Added Successfully",
    currentPage: "Home Added Successfully",
  });
});

module.exports = { hostRouter, registeredHomes };
