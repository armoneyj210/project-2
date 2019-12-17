const mongoose = require("./connection");
const Schema = mongoose.Schema;

const ComicSchema = new Schema({
  name: String,
  universe: String,
  description: String,
  firstAppearance: String,
  pic: String
});
const comicCollection = mongoose.model("Comic", ComicSchema);

const getComics = () => {
  return comicCollection.find({});
};

const getComicbyId = id => {
  return comicCollection.findById(id);
};

const createComic = comicObject => {
  return comicCollection.create(comicObject);
};

const deleteComic = id => {
  return comicCollection.deleteOne({ _id: id });
};

const updateComic = (id, updatedComicObject) => {
  return comicCollection.updateOne({ _id: id }, updatedComicObject);
};

module.exports = {
  getComics,
  getComicbyId,
  createComic,
  deleteComic,
  updateComic
};
