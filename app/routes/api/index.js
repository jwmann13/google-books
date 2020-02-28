const router = require("express").Router();
const books = require("./books");
const search = require("./search");

router.use("/books", books);
router.use("/search", search);

module.exports = router;
