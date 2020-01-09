const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const FarmerUser = require('../models/farmer-model.js');
const Users = require('../models/users-model.js');

// farmer register and login

router.post('/farmer/register', (req, res) => {
  let user = req.body;
  const hash = bcrypt.hashSync(user.password, 12);
  user.password = hash;

  FarmerUser.add(user)
    .then(saved => {
      res.status(201).json(saved)
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.post('/farmer/login', (req, res) => {
  const credentials = req.body;

  if(credentials.password && credentials.username) {
    FarmerUser.findByUsername(credentials.username)
      .then(user => {
        if(user && bcrypt.compareSync(credentials.password, user.password)) {
          const token = signToken(user, 'farmer')
          res.status(200).json({ user: user, token: token })
        } else {
          res.status(401).json({ message: 'Invalid Credentials 💀' })
        }
      })
  } else {
    res.status(401).json({ message: 'Please provide the correcr credentials!' })
  }
});


// consumer register and login

router.post('/users/register', (req, res) => {
  let user = req.body;
  const hash = bcrypt.hashSync(user.password, 12);
  user.password = hash;

  Users.add(user)
  .then(saved => {
    res.status(201).json(saved);
  })
  .catch(error => {
    res.status(500).json(error);
  });
});

router.post('/users/login', (req, res) => {
  let { username, password } = req.body;

  Users.findBy({ username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = signToken(user)
        res.status(200).json({
          token,
          message: `Welcome ${user.username}`,
        })
      } else {
        res.status(401).json({ message: 'Invalid Credentials 💀' });
      }
    })
    .catch(error => {
      res.status(500).json(error);
    })
});

// sign token function

function signToken(user) {
  const payload = {
    username: user.username,
  };

  const secret = process.env.JWT_SECRET || 'i love cookies';

  const options = {
    expiresIn: '5 hours'
  };

  return jwt.sign(payload, secret, options);
}


module.exports = router;

