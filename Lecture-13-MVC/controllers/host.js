const Home = require("../models/home");
exports.getAddHome = (req, res, next) => {
  res.render("addHome", { pagetitle: "Add Home — Airbnb" });
};
exports.postAddHome = (req, res, next) => {
  let { houseName, price, location, rating, photoUrl } = req.body;
  let home = new Home(houseName, price, location, rating, photoUrl);
  home.save();
  res.render("homeAdded", { pagetitle: "Home Registered — Airbnb" });
};
