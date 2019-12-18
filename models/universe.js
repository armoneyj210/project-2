const mongoose = require("./connection");
const Schema = mongoose.Schema;

const UniverseSchema = new Schema({
  universe: String,
  description: String,
  characters: String,
  pic: String
});
const universeCollection = mongoose.model("Universe", UniverseSchema);

const getUniverses = () => {
  return universeCollection.find({});
};

const getUniversebyId = id => {
  return universeCollection.findById(id);
};

const createUniverse = universeObject => {
  return universeCollection.create(universeObject);
};

const deleteUniverse = id => {
  return universeCollection.deleteOne({ _id: id });
};

const updateUniverse = (id, updatedUniverseObject) => {
  return universeCollection.updateOne({ _id: id }, updatedUniverseObject);
};

module.exports = {
  getUniverses,
  getUniversebyId,
  createUniverse,
  deleteUniverse,
  updateUniverse
};
