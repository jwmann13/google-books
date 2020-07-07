const express = require("express");
const morgan = require("morgan");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const MongoStore = require("connect-mongo")(session);

const app = express();

const { dbConnection } = require("./models");
const routes = require("./routes");
const auth = require("./lib/passport")
const PORT = process.env.PORT || 4000;

app.use(morgan("dev"));

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("public"));
}
app.use(cookieParser());

app.use(session({
  secret: "cor-blimey",
  store: new MongoStore({ mongooseConnection: dbConnection }),
  resave: false,
  saveUninitialized: false
}));

app.use(auth.initialize);
app.use(auth.session);
app.use(auth.setUser)

app.use(routes)

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
