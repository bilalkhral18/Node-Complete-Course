const Home = require("../models/home");
const Favourite = require("../models/favourites");
exports.getIndexHomes = (req, res, next) => {
  Home.fetchAll()
    .then(([registeredHomes]) => {
      res.render("store/index", {
        homes: registeredHomes,
        pagetitle: "Airbnb - Where You Find Home",
        currentPage: "airbnb index",
      });
    })
    .catch((error) => {
      console.log("error while saving", error);
    });
};

exports.getBookings = (req, res, next) => {
  res.render("store/booking", {
    pagetitle: "Bookings — Airbnb",
    currentPage: "bookings",
  });
};

exports.getHomeList = (req, res, next) => {
  Home.fetchAll()
    .then(([registeredHomes]) => {
      res.render("store/home-list", {
        homes: registeredHomes,
        pagetitle: "Available Homes — Airbnb",
        currentPage: "home-list",
      });
    })
    .catch((error) => {
      console.log("error while saving", error);
    });
};
exports.getHomeDetails = (req, res, next) => {
  let homeId = req.params.homeId;
  Home.findById(homeId).then(([homeDetails]) => {
    console.log(homeDetails);
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

exports.getFavourites = (req, res, next) => {
  Home.fetchAll()
    .then(([registeredHomes]) => {
      Favourite.getFavourites((favourites) => {
        const getFavouriteData = registeredHomes.filter((home) =>
          favourites.includes(home.id),
        );
        res.render("store/favourite-list", {
          favouriteHomes: getFavouriteData,
          pagetitle: "Favourites — Airbnb",
          currentPage: "favourites",
        });
      });
    })
    .catch((error) => {
      console.log("error while saving", error);
    });
};
exports.postAddToFavourites = (req, res, next) => {
  const id = req.body.id;
  Favourite.addToFavourites(id, (error) => {
    if (error) {
      console.log("this id is already added in a favourite", error);
    }
    res.redirect("/favourites");
  });
};
exports.postRemoveFromFavourites = (req, res, next) => {
  const homeId = req.params.homeId;
  Favourite.deleteFromFavourites(homeId, (error) => {
    if (error) {
      console.log("this id is already added in a favourite", error);
    }
    res.redirect("/favourites");
  });
};
