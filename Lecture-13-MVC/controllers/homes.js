const { registeredHomes } = require("./host");
exports.getHomes = (req, res, next) => {
  // console.log(registeredHomes);
  res.render("home", {
    homes: registeredHomes,
    pagetitle: "Airbnb - Where You Find Home",
  });
};
