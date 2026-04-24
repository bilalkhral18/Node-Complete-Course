// Local Module
const db = require("../utils/databaseUtils");
module.exports = class Home {
  constructor(id, houseName, price, location, rating, photoUrl, description) {
    ((this.houseName = houseName),
      (this.price = price),
      (this.location = location),
      (this.rating = rating),
      (this.photoUrl = photoUrl),
      (this.description = description),
      (this.id = id));
  }
  save() {
    if (this.id) {
      return db.execute(
        `UPDATE homes SET houseName=? , price=? , location=?, rating=?, photoUrl=?, description=? WHERE id=?`,
        [
          this.houseName,
          this.price,
          this.location,
          this.rating,
          this.photoUrl,
          this.description,
          this.id,
        ],
      );
    } else {
      return db.execute(
        `INSERT INTO homes (houseName, price, location, rating, photoUrl, description) VALUES(? , ? , ? , ? , ? , ?)`,
        [
          this.houseName,
          this.price,
          this.location,
          this.rating,
          this.photoUrl,
          this.description,
        ],
      );
    }
  }
  static fetchAll() {
    return db.execute("SELECT * from homes");
  }
  static findById(homeId) {
    return db.execute("SELECT * from homes WHERE id=?", [homeId]);
  }
  static deleteHome(homeId) {
    return db.execute("DELETE from homes WHERE id=?", [homeId]);
  }
};
