const db = require("../utils/databaseUtils");
module.exports = class Home {
  constructor(houseName, price, location, rating, photoUrl) {
    ((this.houseName = houseName),
      (this.price = price),
      (this.location = location),
      (this.rating = rating),
      (this.photoUrl = photoUrl));
  }
  save() {
    // .then(([rows, fields]) => console.log("Getting Data", rows))
    // .catch((error) => console.log("Error while getting data from db", error));
  }
  static fetchAll() {
    return db.execute("SELECT * FROM homes");
  }
  static findById(homeId, callback) {}
  static deleteHome(homeId, callback) {}
};
