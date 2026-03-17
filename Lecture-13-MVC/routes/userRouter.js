// Ecternal Module
const express = require("express");
// ship router from express called express core module
const userRouter = express.Router();
const homeController = require("../controllers/homes");

userRouter.get("/", homeController.getHomes);

module.exports = userRouter;
