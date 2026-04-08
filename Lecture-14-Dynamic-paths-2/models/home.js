// Local Module
const rootdir = require("../utils/pathUtils");
const Favourite = require("../models/favourites");
// CORE Module
const fs = require("fs");
const path = require("path");
const filePath = path.join(rootdir, "data", "homes.json");
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
      if (this.id) {
        registeredHomes = registeredHomes.map((home) =>
          home.id === this.id ? this : home,
        );
      } else {
        this.id = Date.now().toString(36) + Math.random().toString(36).slice(2);
        registeredHomes.push(this);
      }
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
    fs.readFile(filePath, (err, data) => {
      callback(!err ? JSON.parse(data) : []);
    });
  }
  static findById(homeId, callback) {
    Home.fetchAll((homes) => {
      let homeDetails = homes.filter((home) => home.id == homeId);
      callback(homeDetails);
    });
  }
  static deleteHome(homeId, callback) {
    Home.fetchAll((registeredHomes) => {
      registeredHomes = registeredHomes.filter((home) => home.id !== homeId);
      fs.writeFile(filePath, JSON.stringify(registeredHomes), (error) => {
        Favourite.deleteFromFavourites(homeId, callback);
      });
    });
  }
};
