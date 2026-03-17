exports.getAddHome = (req, res, next) => {
  res.render("addHome", { pagetitle: "Add Home — Airbnb" });
};
const registeredHomes = [];
exports.postAddHome = (req, res, next) => {
  // console.log(req.body);
  registeredHomes.push(req.body);
  res.render("homeAdded", { pagetitle: "Home Registered — Airbnb" });
};
exports.registeredHomes = registeredHomes;
