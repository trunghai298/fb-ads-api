const express = require("express");
const { getAll, create } = require("../controllers/Fb");

const router = express.Router();

router.route("/").get(getAll).post(create);

module.exports = router;
