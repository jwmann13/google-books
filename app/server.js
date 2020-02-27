const express = require("express");
const PORT = process.env.PORT || 6200;
const app = express();

const session = require("express-session");
const { dbConnection } = require("./models");
const MongoStore = require("connect-mongo")(session);

const routes = require("./routes");

const morgan = require("morgan");

app.use(morgan("dev"));

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("public"));
}

app.use(session({
  secret: "cor-blimey",
  store: new MongoStore({ mongooseConnection: dbConnection }),
  resave: false,
  saveUninitialized: false
}));

app.use(routes)

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
