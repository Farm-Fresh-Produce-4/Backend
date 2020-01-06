const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const authRoute = require('../auth/auth-router.js');
const userRoute = require('../users/users-router.js');
const farmerRoute = require('../farmers/farmer-router.js');
const produceRoute = require('../produce/produce-router.js')
const orderRoute = require('../orders/orders-router.js');


const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api/auth', authRoute, userRoute, farmerRoute);
server.use('/api/farmers', produceRoute, orderRoute);

server.get('/', (req, res) => {
  res.status(200).json({ message: 'Welcome to the Backend 🤘🏼'})
})

module.exports = server;