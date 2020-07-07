const router = require("express").Router();
const books = require("./books");
const search = require("./search");
const user = require("./user")

router.use("/books", books);
router.use("/search", search);
router.use("/user", user);

module.exports = router;
