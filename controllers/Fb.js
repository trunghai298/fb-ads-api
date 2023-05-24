const fbService = require("../services/Fb");

exports.getAll = async (req, res) => {
  try {
    const datas = await fbService.getAll();
    res.json({ data: datas, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.create = async (req, res) => {
  try {
    const data = await fbService.create(req.body);
    res.json({ data, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
