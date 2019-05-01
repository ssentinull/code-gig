const db = require('../config/database');
const express = require('express');
const Gig = require('../models/Gig');

const router = express.Router();

router.get('/', (req, res) => Gig.findAll()
    .then(gigs => {
      console.log('These are the gigs: ' + gigs);
      res.sendStatus(200);
    })
    .catch(err => console.log('/ route error: ' + err))
  );

module.exports = router;