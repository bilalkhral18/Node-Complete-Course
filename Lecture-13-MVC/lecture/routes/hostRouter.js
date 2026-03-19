const express = require("express");
// ship router from express called express core module
const hostRouter = express.Router();
// Local Module
const hostController = require("../controllers/host");
hostRouter.get("/add-home", hostController.getAddHome);
hostRouter.post("/add-home", hostController.postAddHome);

module.exports = { hostRouter };
