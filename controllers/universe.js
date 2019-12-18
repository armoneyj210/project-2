const express = require("express");

const universeApi = require("../models/universe.js");

const universeRouter = express.Router();

universeRouter.get("/", (req, res) => {
  universeApi
    .getUniverses()
    .then(allUniverses => {
      res.render("universe/allUniverses", { allUniverses });
    })
    .catch(error => {
      console.log("Failed to retrieve all Universes");
      console.log(error);
      res.send(error);
    });
});
universeRouter.get("/new", (req, res) => {
  res.render("universe/createUniverse");
});
universeRouter.get("/:id/edit", (req, res) => {
  universeApi
    .getUniversebyId(req.params.id)
    .then(singleUniverse => {
      res.render("universe/editUniverse", { singleUniverse });
    })
    .catch(error => {
      console.log(error);
      res.send(error);
    });
});
universeRouter.get("/:id", (req, res) => {
  universeApi
    .getUniversebyId(req.params.id)
    .then(singleUniverse => {
      res.render("universe/singleUniverse", { singleUniverse });
    })
    .catch(error => {
      console.log("Failed to retriev universe by Id");
      console.log(error);
      res.send(error);
    });
});
universeRouter.post("/", (req, res) => {
  universeApi
    .createUniverse(req.body)
    .then(() => {
      res.redirect("/universe/");
    })
    .catch(error => {
      console.log("Failed to create Universe");
      console.log(error);
      res.send(error);
    });
});
universeRouter.delete("/:id", (req, res) => {
  universeApi
    .deleteUniverse(req.params.id)
    .then(() => {
      res.redirect("/universe");
    })
    .catch(error => {
      console.log("Failed to delete universe");
      console.log(error);
      res.send(error);
    });
});

universeRouter.put("/:id", (req, res) => {
  universeApi
    .updateUniverse(req.params.id, req.body)
    .then(() => {
      res.redirect(`/universe/${req.params.id}`);
    })
    .catch(error => {
      console.log("Failed to update universe");
      console.log(error);
      res.send(error);
    });
});
/* Step 6
 *
 * Export the router from the file. *
 */
module.exports = {
  universeRouter
};
