const { OIDCStrategy } = require('passport-azure-ad');
const { adfsConfig } = require('../../config');
const fetch = require('../../helpers/api');

const iOIDCStrategyOptionWithRequest = {
  identityMetadata: adfsConfig.identityMetadata,
  clientID: adfsConfig.clientID,
  responseType: adfsConfig.responseType,
  responseMode: adfsConfig.responseMode,
  redirectUrl: adfsConfig.redirectUrl,
  allowHttpForRedirectUrl: adfsConfig.allowHttpForRedirectUrl,
  clientSecret: adfsConfig.clientSecret,
  validateIssuer: adfsConfig.validateIssuer,
  passReqToCallback: adfsConfig.passReqToCallback,
  scope: adfsConfig.scope,
};

const verifyOIDCFunction = async (iss, sub, profile, accessToken, refreshToken, done) => {
  if (!profile.oid) {
    return done(new Error('No OID found in user profile'), null);
  }
  let email = '';
  try {
    const user = await fetch.callGet(`${adfsConfig.resourceURL}/v1.0/me`, { Authorization: `Bearer ${accessToken}` });
    if (user) {
      email = user.mail ? user.mail : user.userPrincipalName;
    }
  } catch (err) {
    done(err, null);
  }
  return done(null, { profile: { ...profile, email }, accessToken, refreshToken });
};

module.exports = new OIDCStrategy(iOIDCStrategyOptionWithRequest, verifyOIDCFunction);
