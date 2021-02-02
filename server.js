const express = require("express");
const session = require("express-session");
const passport = require("./config/passport");
require("dotenv").config();

const db = require("./models");

const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  };
  
  app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
  app.use(passport.initialize());
  app.use(passport.session());
  
  app.use(routes);

  db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
        console.log("Listening on PORT " + PORT);
    });
});