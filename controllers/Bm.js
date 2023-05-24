const bmService = require("../services/Bm");

exports.getAll = async (req, res) => {
  try {
    const datas = await bmService.getAll();
    res.json({ data: datas, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.create = async (req, res) => {
  try {
    const data = await bmService.create(req.body);
    res.json({ data, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
