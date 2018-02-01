'use strict';

const router = require('express').Router();
const rp = require('request-promise');

router.get('/letsauth/callback', async (req, res) => {
  if (req.session.state !== req.query.state) {
    // TODO: handle the state is not the same
  }

  const options = {
    uri: 'http://localhost:3000/api/v1/oauth/access_token',
    method: 'POST',
    json:true,
    headers: {
      'Authorization': 'Basic ' + Buffer.from('5a7184b83898ab345ad12f28:d75090b136767921ff274e1e5c5c012e').toString('base64')
    },
    body: {
      grant_type: 'authorization_code',
      code: req.query.code,
      redirect_uri: 'http://localhost:4000/v1/auth/letsauth/callback'
    }
  };
  rp(options)
    .then(data => {
      res.status(200).send(data);
    })
    .catch(err => {
      console.log(err);
    });
});

module.exports = router;
