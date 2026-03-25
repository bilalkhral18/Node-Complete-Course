const { randomUUID } = require("crypto");
const Home = require("../models/home");
exports.getAddHome = (req, res, next) => {
  res.render("host/addHome", {
    pagetitle: "Add Home — Airbnb",
    currentPage: "Add Home — Airbnb",
  });
};

exports.postAddHome = (req, res, next) => {
  const id = randomUUID(); // e.g. "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d"
  let { houseName, price, location, rating, photoUrl } = req.body;
  let home = new Home(id, houseName, price, location, rating, photoUrl);
  home.save();
  res.render("host/homeAdded", {
    pagetitle: "Home Registered — Airbnb",
    currentPage: "Home Registered",
  });
};

exports.hostHomeList = (req, res, next) => {
  Home.fetchAll((registeredHomes) => {
    res.render("host/admin-home-list", {
      homes: registeredHomes,
      pagetitle: "Host Home List - Airbnb",
      currentPage: "host-home-list",
    });
  });
};
