const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const { User } = require("../models");

passport.use(
  "local",
  new LocalStrategy(
    { usernameField: "email" },
    async (username, password, done) => {
      try {
        const user = await User.findOne({ email: username }).exec();
        if (!user)
          return done(null, false, {
            message: "No user with that information"
          });
        const passwordOK = await user.comparePassword(password);
        if (!passwordOK)
          return done(null, false, {
            message: "No user with that information"
          });
        return done(null, user);
      } catch (err) {
        done(err);
      }
    }
  )
);

passport.serializeUser((user, done) => done(null, user._id));

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findOne({ _id: id }).exec();
    return done(null, user);
  } catch (err) {
    return done(err);
  }
});

module.exports = {
  initialize: passport.initialize(),
  session: passport.session(),
  setUser: (req, res, next) => {
    res.locals.user = req.user;
    return next();
  }
};
