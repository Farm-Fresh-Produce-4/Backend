const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Users = require('../models/users-model.js');
const Orders = require('../models/orders-model.js');
const Farms = require('../models/farm-model.js');
const City = require('../models/city-model.js');
const uuidv1 = require('uuid/v1');

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

// router.get('/orders/:id', (req, res) => {
//   const { id } = req.params;

//   Orders.findByCustomerId(id)
//     .then(orders => {
//       orders.forEach(order => {
//         if (order.delivered) {
//           order.delivered = true;
//         } else {
//           order.delivered = false;
//         }
//       })
//       res.status(200).json({ order_history: orders })
//     })
//     .catch(error => {
//       res.status(500).json({ message: 'Could not fetch orders!' })
//     });
// });


// shows farms by city and state
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

// shopping by city
router.get('/shop/:cityId', (req, res) => {
  const { cityId } = req.params;
  City.findProduceItems(cityId)
    .then(items => {
      res.status(200).json({ items: items })
    })
    .catch(error => {
      res.status(500).json(error)
    })

})
//posting an order
router.post('/order/:id', (req, res) => {
  const userId = req.params.id;
  const orderId = uuidv1();
  
  
  let orders = req.body;
  let orderItems = orders.order_items;
  
  console.log('order_items:', orderItems);
  console.log('order_items.length:', orderItems.length);
  console.log(req.body);
  for (let i = 0; i < orderItems.length; i++) {
    orderItems[i].orders_id = orderId
    orderItems[i].users_id = Number(userId)
  }
  
  orders.id = orderId
  orderDetails = {
    "id": orders.id,
    "address": orders.address,
    "order_date": orders.order_date,
    "delivered": orders.delivered,
    "user_id": Number(userId)
  }

  Orders.add(orderDetails, orderItems)
    .then(order => {
      res.status(201).json(order)
    })
    .catch(error => {
      res.status(500).json({ error: error, message: 'Failed to add new order' })
    })
});

module.exports = router;