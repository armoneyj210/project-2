const mongoose = require("./connection");
const Schema = mongoose.Schema;
const HomeSchema = new Schema();
const HomeCollection = mongoose.model("Home", HomeSchema);

const getHome = () => {
  return HomeCollection.find({});
};

module.exports = {
  getHome
};
