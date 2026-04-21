// Local Module
const db = require("../utils/databaseUtils");
module.exports = class Home {
  constructor(houseName, price, location, rating, photoUrl) {
    ((this.houseName = houseName),
      (this.price = price),
      (this.location = location),
      (this.rating = rating),
      (this.photoUrl = photoUrl));
  }
  save() {}
  static fetchAll() {
    return db.execute("SELECT * from homes");
  }
  static findById(homeId, callback) {}
  static deleteHome(homeId, callback) {}
};
