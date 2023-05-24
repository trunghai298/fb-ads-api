const FbModel = require("../models/Fb");

exports.getAll = async () => {
  return await FbModel.find();
};

exports.create = async (data) => {
  return await FbModel.create(data);
};
