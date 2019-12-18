const express = require("express");

const creatorApi = require("../models/creator.js");

const creatorRouter = express.Router();

creatorRouter.get("/", (req, res) => {
  creatorApi
    .getCreators()
    .then(allCreators => {
      res.render("creator/allCreators", { allCreators });
    })
    .catch(error => {
      console.log("Failed to retrieve all Creators");
      console.log(error);
      res.send(error);
    });
});
creatorRouter.get("/new", (req, res) => {
  res.render("creator/createCreator");
});
creatorRouter.get("/:id/edit", (req, res) => {
  creatorApi
    .getCreatorbyId(req.params.id)
    .then(singleCreator => {
      res.render("creator/editCreator", { singleCreator });
    })
    .catch(error => {
      console.log(error);
      res.send(error);
    });
});
creatorRouter.get("/:id", (req, res) => {
  creatorApi
    .getCreatorbyId(req.params.id)
    .then(singleCreator => {
      res.render("creator/singleCreator", { singleCreator });
    })
    .catch(error => {
      console.log("Failed to retriev creator by Id");
      console.log(error);
      res.send(error);
    });
});
creatorRouter.post("/", (req, res) => {
  creatorApi
    .createCreator(req.body)
    .then(() => {
      res.redirect("/creator/");
    })
    .catch(error => {
      console.log("Failed to create Creator");
      console.log(error);
      res.send(error);
    });
});
creatorRouter.delete("/:id", (req, res) => {
  creatorApi
    .deleteCreator(req.params.id)
    .then(() => {
      res.redirect("/creator");
    })
    .catch(error => {
      console.log("Failed to delete creator");
      console.log(error);
      res.send(error);
    });
});

creatorRouter.put("/:id", (req, res) => {
  creatorApi
    .updateCreator(req.params.id, req.body)
    .then(() => {
      res.redirect(`/creator/${req.params.id}`);
    })
    .catch(error => {
      console.log("Failed to update creator");
      console.log(error);
      res.send(error);
    });
});
/* Step 6
 *
 * Export the router from the file. *
 */
module.exports = {
  creatorRouter
};
