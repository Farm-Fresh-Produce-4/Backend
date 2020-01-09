  
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const authenticate = require('../auth/authenticate-middleware.js');

const authRoute = require('../auth/auth-router.js');
const userRoute = require('../routes/users-router.js');
const farmerRoute = require('../routes/farmer-router.js');
const produceRoute = require('../routes/produce-router.js')
const orderRoute = require('../routes/orders-router.js');


const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api/auth', authRoute);
server.use('/api/farmers', authenticate, produceRoute, orderRoute, farmerRoute);
server.use('/api/users', authenticate, userRoute);

server.get('/', (req, res) => {
  res.status(200).json({ message: 'Welcome to the Backend 🤘🏼'})
})

module.exports = server;