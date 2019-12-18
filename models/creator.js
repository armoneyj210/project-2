const mongoose = require("./connection");
const Schema = mongoose.Schema;

const CreatorSchema = new Schema({
  name: String,
  age: Number,
  characters: String,
  pic: String
});
const creatorCollection = mongoose.model("Creator", CreatorSchema);

const getCreators = () => {
  return creatorCollection.find({});
};

const getCreatorbyId = id => {
  return creatorCollection.findById(id);
};

const createCreator = creatorObject => {
  return creatorCollection.create(creatorObject);
};

const deleteCreator = id => {
  return creatorCollection.deleteOne({ _id: id });
};

const updateCreator = (id, updatedCreatorObject) => {
  return creatorCollection.updateOne({ _id: id }, updatedCreatorObject);
};

module.exports = {
  getCreators,
  getCreatorbyId,
  createCreator,
  deleteCreator,
  updateCreator
};
