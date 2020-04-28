require("dotenv").config();

const bcrypt = require("bcrypt");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const db = require("../database/models");
const Admin = db.admin_login;
const { ACCESS_TOKEN_SECRET } = process.env;

/* PASSPORT STRATEGIES */
passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
      session: false,
    },
    (email, password, done) => {
      Admin.findOne({ where: { email: email } })
        .then(async (foundAdmin) => {
          if (!foundAdmin) {
            return done(null, false, {
              message: "Can't find a user with this email",
            });
          }

          const isAdmin = await bcrypt.compare(password, foundAdmin.password);

          if (!isAdmin) {
            done(null, false, { message: "Incorrect password" });
          }

          done(null, foundAdmin.dataValues);
        })
        .catch((queryError) => console.error(`Query error: ${queryError}`));
    }
  )
);

passport.use(
  new JwtStrategy(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: ACCESS_TOKEN_SECRET,
    },
    (jwtPayload, done) => {
      Admin.findOne({ where: { email: jwtPayload.email } })
        .then((admin) => done(null, admin.dataValues))
        .catch((jwtErr) => console.error(`JWT Error: ${jwtErr}`));
    }
  )
);
