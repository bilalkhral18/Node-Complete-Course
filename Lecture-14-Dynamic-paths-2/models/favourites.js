// Local Module
const rootdir = require("../utils/pathUtils");
// CORE Module
const fs = require("fs");
const path = require("path");
const favouritefilePath = path.join(rootdir, "data", "favourites.json");
module.exports = class Favourite {
  static getFavourites(callback) {
    fs.readFile(favouritefilePath, (err, data) => {
      if (err) {
        return callback([]);
      }
      if (!data || data.length === 0) {
        return callback([]);
      }
      try {
        return callback(JSON.parse(data));
      } catch (error) {
        return callback([]);
      }
    });
  }
  static addToFavourites(homeId, callback) {
    Favourite.getFavourites((favourites) => {
      if (favourites.includes(homeId)) {
        callback("home already added in a database");
      } else {
        favourites.push(homeId);
        fs.writeFile(favouritefilePath, JSON.stringify(favourites), callback);
      }
    });
  }
  static deleteFromFavourites(homeId, callback) {
    Favourite.getFavourites((favouriteIds) => {
      favouriteIds = favouriteIds.filter(
        (favouriteId) => favouriteId !== homeId,
      );
      fs.writeFile(favouritefilePath, JSON.stringify(favouriteIds), callback);
    });
  }
};
