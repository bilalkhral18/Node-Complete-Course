// Local Module
const rootdir = require("../utils/pathUtils");
// CORE Module
const fs = require("fs");
const path = require("path");

module.exports = class Home {
  constructor(houseName, price, location, rating, photoUrl) {
    ((this.houseName = houseName),
      (this.price = price),
      (this.location = location),
      (this.rating = rating),
      (this.photoUrl = photoUrl));
  }
  save() {
    Home.fetchAll((registeredHomes) => {
      registeredHomes.push(this);
      const filePath = path.join(rootdir, "data", "homes.json");
      fs.writeFile(filePath, JSON.stringify(registeredHomes), (err) => {
        if (err) {
          console.log("There was an error to write a data in a file", err);
        } else {
          console.log("Data write in a file successfully");
        }
      });
    });
  }
  static fetchAll(callback) {
    const filePath = path.join(rootdir, "data", "homes.json");
    fs.readFile(filePath, (err, data) => {
      callback(!err ? JSON.parse(data) : []);
    });
  }
};
