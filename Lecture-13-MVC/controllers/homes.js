const Home = require("../models/home");
exports.getHomes = (req, res, next) => {
  // console.log(registeredHomes);
  Home.fetchAll((registeredHomes) => {
    res.render("home", {
      homes: registeredHomes,
      pagetitle: "Airbnb - Where You Find Home",
    });
  });
};
