const router = require("express").Router();
const controller = require("../controllers/index");

router.get("/:term", controller.get);

module.exports = router;
