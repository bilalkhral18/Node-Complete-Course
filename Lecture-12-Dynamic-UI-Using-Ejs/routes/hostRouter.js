const express = require("express");
// Core Module
const path = require("path");
// ship router from express called express core module
const hostRouter = express.Router();
// Local Module
const rootdir = require("../utils/pathUtils");
hostRouter.get("/add-home", (req, res, next) => {
  res.render("addHome", { pagetitle: "Add Home — Airbnb" });
});
const registeredHomes = [];
hostRouter.post("/add-home", (req, res, next) => {
  // console.log(req.body);
  registeredHomes.push(req.body);
  res.render("homeAdded", { pagetitle: "Home Registered — Airbnb" });
});

module.exports = { hostRouter, registeredHomes };
