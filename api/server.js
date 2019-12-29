const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const userRoute = require('../users/users-router.js');
const farmerRoute = require('../farmers/farmer-router.js');
const produceRoute = require('../produce/produce-router.js')
const orderRoute = require('../orders/orders-router.js');


const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api/auth/', userRoute, farmerRoute);
server.use('/api/farmers', produceRoute, orderRoute);

module.exports = server;