const router = require("express").Router();
const passport = require("passport");
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
    return next(new Error("couldn't make user"));
  } catch (err) {
    return next(err);
  }
});

router.route("/login").post(
  passport.authenticate("local", {}),
  (req, res) => {
    res.send(res.locals.user);
  }
);

router.route("/logout").get((req, res) => {
  req.logOut();
  res.end();
});

router.route("/current").get((req, res) => {
  if (res.locals.user) res.send(res.locals.user);
  else res.send(null);
})

module.exports = router;
