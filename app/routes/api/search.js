const router = require("express").Router();
const { bookProjectionController } = require("../../controllers")

router.route("/").get(bookProjectionController);

module.exports = router;
