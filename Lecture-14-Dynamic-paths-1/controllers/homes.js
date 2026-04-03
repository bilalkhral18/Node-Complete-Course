const Home = require("../models/home");
exports.getIndexHomes = (req, res, next) => {
  Home.fetchAll((registeredHomes) => {
    res.render("store/index", {
      homes: registeredHomes,
      pagetitle: "Airbnb - Where You Find Home",
      currentPage: "airbnb index",
    });
  });
};
exports.getFavourites = (req, res, next) => {
  Home.fetchAll((registeredHomes) => {
    res.render("store/favourite-list", {
      homes: registeredHomes,
      pagetitle: "Favourites — Airbnb",
      currentPage: "favourites",
    });
  });
};

exports.getBookings = (req, res, next) => {
  res.render("store/booking", {
    pagetitle: "Bookings — Airbnb",
    currentPage: "bookings",
  });
};

exports.getHomeList = (req, res, next) => {
  Home.fetchAll((registeredHomes) => {
    res.render("store/home-list", {
      homes: registeredHomes,
      pagetitle: "Available Homes — Airbnb",
      currentPage: "home-list",
    });
  });
};

exports.getHomeDetails = (req, res, next) => {
  let homeId = req.params.homeId;
  Home.findById(homeId, (homeDetails) => {
    if (!homeDetails || homeDetails.length === 0) {
      return res.redirect("/homes");
    } else {
      res.render("store/home-detail", {
        home: homeDetails[0],
        pagetitle: "Home Detail - airbnb",
        currentPage: "home-list",
      });
    }
  });
};
