const Home = require("../models/home");
exports.getAddHome = (req, res, next) => {
  res.render("host/addHome", {
    pagetitle: "Add Home — Airbnb",
    currentPage: "Add Home — Airbnb",
  });
};

exports.postAddHome = (req, res, next) => {
  let { houseName, price, location, rating, photoUrl } = req.body;
  let home = new Home(houseName, price, location, rating, photoUrl);
  home.save();
  res.render("host/homeAdded", {
    pagetitle: "Home Registered — Airbnb",
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
