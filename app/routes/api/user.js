const router = require("express").Router();
const { User } = require("../../models");

router.route("/").post(async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    const savedUser = await new User({
      username,
      email,
      password
    }).save();
      if (savedUser) return res.json(savedUser);
      return next(new Error("couldn't make user"))
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
