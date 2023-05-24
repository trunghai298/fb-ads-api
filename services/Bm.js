const BmModel = require("../models/Bm");

exports.getAll = async () => {
  return await BmModel.find();
};

exports.create = async (data) => {
  return await BmModel.collection.insertMany(data);
};
