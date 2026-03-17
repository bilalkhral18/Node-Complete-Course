exports.errorMessage = (req, res, next) => {
  // res.status(404).send("<h1>404 page not found</h1>");
  res.status(404).render("404", { pagetitle: "404 — Page Not Found · Airbnb" });
};
