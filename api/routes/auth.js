const router = require('express').Router();
const passport = require('passport');
const Cookies = require('universal-cookie');

const onSuccessLogin = (req, res) => {
  res.cookie('user', {
    id: 'local',
    name: res.req.user.name,
    email: res.req.user.email,
  });
  res.send({
    id: 'local',
    name: res.req.user.name,
    email: res.req.user.email,
  });
};

router.get('/currentuser', (req, res) => {
  const cookies = new Cookies(req.headers.cookie);
  const userDetails = cookies.get('user');
  res.json(userDetails);
});

router.post(
  '/login',
  passport.authenticate('local'),
  onSuccessLogin,
);

router.get(
  '/auth/google',
  passport.authenticate('google', { scope: ['profile'] }),
);
router.get(
  '/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/', session: false }),
  (req, res) => {
    const { user } = req;
    res.cookie('user', {
      id: user.id,
      name: user.displayName,
      email: user.email,
    });
    res.redirect(`http://localhost:7400?token=${user.id}`);
  },
);

module.exports = router;
