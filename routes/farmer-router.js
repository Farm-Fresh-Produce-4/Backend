const router = require('express').Router();
const Farmers = require('../models/farmer-model.js');
const Orders = require('../models/orders-model.js');
const Produce = require('../models/produce-model.js');

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

router.get('/produce/:farmId', (req, res) => {
  const { farmId } = req.params;
  Produce.find(farmId)
    .then(produce => {
      res.status(200).json(produce)
    })
    .catch(error => {
      res.status(500).json({ message: 'Unable to fetch list of produce items' })
    })
})

router.get('/:farmId/orders', (req, res) => {
  const { farmId}  = req.params;

  Orders.findByFarmId(farmId)
    .then(items => {
      items.forEach(item => {
        if(item.delivered) {
          item.delivered = true
        } else {
          item.delivered = false;
        }
      })
      res.status(200).json(items)
    })
    .catch(error => {
      res.status(500).json(error)
    })
})

module.exports = router;