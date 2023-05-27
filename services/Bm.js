const BmModel = require("../models/Bm");

exports.getAll = async () => {
  return await BmModel.find();
};

exports.getOne = async (id) => {
  return await BmModel.findOne({ id });
};

exports.create = async (data) => {
  return await BmModel.collection.insertMany(data);
};
