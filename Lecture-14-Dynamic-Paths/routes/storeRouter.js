// Ecternal Module
const express = require("express");
// ship router from express called express core module
const storeRouter = express.Router();
const homeController = require("../controllers/homes");

storeRouter.get("/", homeController.getIndexHomes);
storeRouter.get("/favourites", homeController.getFavourites);
storeRouter.get("/bookings", homeController.getBookings);
storeRouter.get("/homes", homeController.getHomeList);
storeRouter.get("/homes/:homeId", homeController.getHomeDetails);

module.exports = storeRouter;
