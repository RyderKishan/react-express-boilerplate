const OAuth2Strategy = require('passport-oauth2');
const config = require('../../config');
const api = require('../../helpers/api');

const options = {
  authorizationURL: config.adfsConfig.authorizationURL,
  tokenURL: config.adfsConfig.tokenURL,
  clientID: config.adfsConfig.clientID,
  clientSecret: config.adfsConfig.clientSecret,
  callbackURL: config.adfsConfig.redirectUrl,
  passReqToCallback: config.adfsConfig.passReqToCallback,
  scope: config.adfsConfig.scope,
};

const verify = async (accessToken, refreshToken, results, profile, cb) => {
  const userDetails = {};
  try {
    const user = await api.callGet(`${config.adfsConfig.resourceURL}/v1.0/me`, { Authorization: `Bearer ${accessToken}` });
    if (user) {
      userDetails.name = user.displayName;
      userDetails.email = user.mail ? user.mail : user.userPrincipalName;
      userDetails.jobTitle = user.jobTitle;
      userDetails.mobilePhone = user.mobilePhone;
      userDetails.officeLocation = user.officeLocation;
      userDetails.id = user.id;
    }
  } catch (err) {
    cb(err, null);
  }
  return cb(null, { ...userDetails, accessToken, refreshToken });
};

module.exports = new OAuth2Strategy(options, verify);
