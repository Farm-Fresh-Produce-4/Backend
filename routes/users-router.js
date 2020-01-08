const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Users = require('../models/users-model.js');
const Orders = require('../models/orders-model.js');
const Farms = require('../models/farm-model.js');

router.get('/', (req, res) => {
  Users.find()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(err => {
      res.status(500).json({ message: 'You shall not pass!' })
    })
});

router.get('/:id', (req, res) => {
  const { id } = req.params.id;
  Users.findById(id)
    .then(users => {
      res.status(200).json(users)
    })
    .catch(error => {
      res.status(500).json({ message: 'Unable to fetch list of users' })
    })
});

router.get('/orders/:id', (req, res) => {
  const { id } = req.params;

  Orders.findByCustomerId(id)
    .then(orders => {
      orders.forEach(order => {
        if (order.delivered) {
          order.delivered = true;
        } else {
          order.delivered = false;
        }
      })
      res.status(200).json({ order_history: orders })
    })
    .catch(error => {
      res.status(500).json({ message: 'Could not fetch orders!' })
    });
});

router.get('/farms/:cityId/:stateId', (req, res) => {
  const { cityId, stateId } = req.params;

  Farms.findLocal(cityId, stateId)
    .then(orders => {
      res.status(200).json(orders)
    })
    .catch(error => {
      res.status(500).json({ message: 'Unable to fetch list of farms' })
    })
  
});

router.post('/orders', (req, res) => {
  const newOrder = req.body;

  Orders.add(newOrder)
    .then(order => {
      res.status(201).json(order)
    })
    .catch(error => {
      res.status(500).json({ message: 'Failed to add new order' })
    })
});

module.exports = router;