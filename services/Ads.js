const AdsModel = require("../models/Ads");

exports.getAll = async () => {
  return await AdsModel.find();
};

exports.getOne = async (id) => {
  return await AdsModel.findOne({ id });
};

exports.create = async (data) => {
  return await AdsModel.collection.insertMany(data, { ordered: false });
};
