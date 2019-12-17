const express = require("express");

const comicApi = require("../models/comic.js");

const comicRouter = express.Router();

comicRouter.get("/", (req, res) => {
  comicApi
    .getComics()
    .then(allComics => {
      res.render("comics/allComics", { allComics });
    })
    .catch(error => {
      console.log("Failed to retrieve all Comics");
      console.log(error);
      res.send(error);
    });
});
comicRouter.get("/new", (req, res) => {
  res.render("comics/createComic");
});
comicRouter.get("/:id/edit", (req, res) => {
  comicApi
    .getComicbyId(req.params.id)
    .then(singleComic => {
      res.render("comics/editComic", { singleComic });
    })
    .catch(error => {
      console.log(error);
      res.send(error);
    });
});
comicRouter.get("/:id", (req, res) => {
  comicApi
    .getComicbyId(req.params.id)
    .then(singleComic => {
      res.render("comics/singleComic", { singleComic });
    })
    .catch(error => {
      console.log("Failed to retriev comic by Id");
      console.log(error);
      res.send(error);
    });
});
comicRouter.post("/", (req, res) => {
  comicApi
    .createComic(req.body)
    .then(() => {
      res.redirect("/comics/");
    })
    .catch(error => {
      console.log("Failed to create Comic");
      console.log(error);
      res.send(error);
    });
});
comicRouter.delete("/:id", (req, res) => {
  comicApi
    .deleteComic(req.params.id)
    .then(() => {
      res.redirect("/comics");
    })
    .catch(error => {
      console.log("Failed to delete comic");
      console.log(error);
      res.send(error);
    });
});

comicRouter.put("/:id", (req, res) => {
  comicApi
    .updateComic(req.params.id, req.body)
    .then(() => {
      res.redirect(`/comics/${req.params.id}`);
    })
    .catch(error => {
      console.log("Failed to update comic");
      console.log(error);
      res.send(error);
    });
});
/* Step 6
 *
 * Export the router from the file. *
 */
module.exports = {
  comicRouter
};
