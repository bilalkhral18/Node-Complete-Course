const Home = require("../models/home");
exports.getAddHome = (req, res, next) => {
  res.render("host/edit-home", {
    pagetitle: "Add Home — Airbnb",
    currentPage: "Add Home — Airbnb",
    editing: false,
  });
};
exports.getEditHome = (req, res, next) => {
  const homeId = req.params.homeId;
  const editing = req.query.editing === "true";
  // console.log(homeId, editing);
  Home.findById(homeId, (home) => {
    const [editableHome] = home;
    if (!home) {
      console.log("Home Not Found For Editing");
      res.redirect("/host-home-list");
    } else {
      res.render("host/edit-home", {
        pagetitle: "Edit Home Details — Airbnb",
        currentPage: "host-home-list",
        editing: editing,
        home: editableHome,
      });
    }
  });
};
exports.postEditHome = (req, res, next) => {
  let { id, houseName, price, location, rating, photoUrl } = req.body;
  let home = new Home(houseName, price, location, rating, photoUrl);
  home.id = id;
  home.save();
  res.redirect("/host/host-home-list");
};
exports.postAddHome = (req, res, next) => {
  // console.log(req.body);
  let { houseName, price, location, rating, photoUrl } = req.body;
  let home = new Home(houseName, price, location, rating, photoUrl);
  home.save();
  res.redirect("/host/host-home-list");
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
exports.postDeleteHome = (req, res, next) => {
  const homeId = req.params.homeId;
  Home.deleteHome(homeId, (err) => {
    if (err) {
      console.log("Home not deleted", err);
    }
    res.redirect("/host/host-home-list");
  });
};
