const express = require("express");
const { getAll, create, getOne } = require("../controllers/Bm");

const router = express.Router();

router.route("/").get(getAll).post(create);
router.route("/:id").get(getOne);

module.exports = router;
