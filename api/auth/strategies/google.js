const GoogleStrategy = require('passport-google-oauth20').Strategy;

const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } = process.env;

const options = {
  clientID: GOOGLE_CLIENT_ID,
  clientSecret: GOOGLE_CLIENT_SECRET,
  callbackURL: 'http://localhost:7400/token',
};

const google = new GoogleStrategy(options,
  ((token, tokenSecret, profile, done) => done(null, profile)));

module.exports = google;
