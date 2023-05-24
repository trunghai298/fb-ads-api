const AdsModel = require("../models/Ads");

exports.getAll = async () => {
  return await AdsModel.find();
};

exports.create = async (data) => {
  return await AdsModel.collection.insertMany(data, { ordered: false });
};
