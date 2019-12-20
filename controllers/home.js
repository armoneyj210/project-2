const express = require("express");

const homeApi = require("../models/home.js");

const homeRouter = express.Router();

homeRouter.get("/", (req, res) => {
  homeApi
    .getHome()
    .then(() => {
      res.render("home");
    })
    .catch(error => {
      console.log("Failed to Load Home page");
      console.log(error);
      res.send(error);
    });
});

/* Step 6
 *
 * Export the router from the file. *
 */
module.exports = {
  homeRouter
};
