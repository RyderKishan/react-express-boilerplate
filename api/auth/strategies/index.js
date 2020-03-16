// const adfs = require('./adfs');
// const local = require('./local');
const google = require('./google');
// const oauth2 = require('./oauth2');

module.exports = {
  // local: {
  //   name: 'Local Strategy',
  //   id: 'local',
  //   strategy: local,
  // },
  // adfs: {
  //   name: 'OIDCStrategy',
  //   id: 'azuread-openidconnect',
  //   strategy: adfs,
  // },
  // oauth2: {
  //   name: 'OAuth2Strategy',
  //   id: 'oauth2',
  //   strategy: oauth2,
  // },
  google: {
    name: 'GoogleStrategy',
    id: 'google',
    strategy: google,
  },
};
