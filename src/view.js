'use strict';

const router = require('express').Router();
const querystring = require('querystring');
const crypto = require('crypto');

router.get('/login', (req, res) => {
  const state = crypto.randomBytes(4).readUInt32BE(0, true);
  const data = {
    response_type: 'code',
    client_id: '5a7184b83898ab345ad12f28',
    redirect_uri: 'http://localhost:4000/v1/auth/letsauth/callback',
    state: state,
    scopes: 'read:profile'
  };

  req.session.state = state;

  res.render('login', { qs: querystring.stringify(data) });
});

module.exports = router;
