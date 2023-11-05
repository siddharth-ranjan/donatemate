// middleware/auth.js
const passport = require('passport');
const passportJWT = require('passport-jwt');
const ExtractJwt = passportJWT.ExtractJwt;
const JwtStrategy = passportJWT.Strategy;
const config = require('../config');

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: config.jwtSecret,
};

const jwtStrategy = new JwtStrategy(jwtOptions, (jwt_payload, done) => {
  // Check if the token is valid and find the user
  // Example: You can find the user by their ID in the database
  // Replace this with your actual user lookup logic
  User.findById(jwt_payload.id, (err, user) => {
    if (err) {
      return done(err, false);
    }
    if (user) {
      return done(null, user);
    } else {
      return done(null, false);
    }
  });
});

passport.use(jwtStrategy);

module.exports = passport.authenticate('jwt', { session: false });
