const AdsService = require("../services/Ads");

exports.getAll = async (req, res) => {
  try {
    const blogs = await AdsService.getAll();
    res.json({ data: blogs, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getOne = async (req, res) => {
  try {
    const datas = await AdsService.getOne(req.params.id);
    res.json({ data: datas, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.create = async (req, res) => {
  try {
    const data = await AdsService.create(req.body);
    res.json({ data, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// exports.getById = async (req, res) => {
//   try {
//     const blog = await bmService.getBlogById(req.params.id);
//     res.json({ data: blog, status: "success" });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// exports.update = async (req, res) => {
//   try {
//     const blog = await bmService.updateBlog(req.params.id, req.body);
//     res.json({ data: blog, status: "success" });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// exports.delete = async (req, res) => {
//   try {
//     const blog = await bmService.deleteBlog(req.params.id);
//     res.json({ data: blog, status: "success" });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };
