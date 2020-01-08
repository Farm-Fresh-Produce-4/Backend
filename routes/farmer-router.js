const router = require('express').Router();
const Farmers = require('../models/farmer-model.js');
const Orders = require('../models/orders-model.js');

router.get('/:id', (req, res) => {
  const { id } = req.params;

  Farmers.findById(id)
    .then(farmer => {
      res.status(200).json(farmer)
    })
    .catch(error => {
      res.status(500).json({ message: 'Unable to fetch farmers' })
    })
});



module.exports = router;