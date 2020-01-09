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

// get produce
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
// add produce
router.post('/produce/:farmId', (req, res) => {
  const { farmId } = req.params;
  let produceInfo = req.body;
  produceInfo.farms_id = farmId;

  if(produceInfo.name && produceInfo.quantity && produceInfo.price && produceInfo.category_id) {
    Produce.add(produceInfo)
      .then(added => {
        res.status(201).json(added)
      })
      .catch(error => {
        res.status(500).json({ error, message: 'Unable to add produce item' })
      })
  } else {
    res.status(400).json({ message: 'Please fill out all required fields!' })
  }
})

// delete produce
router.delete('/produce/:itemId', (req, res) => {
  const { itemId } = req.params;
  Produce.remove(itemId)
    .then(removed => {
      res.status(200).json({ message: 'Produce item destroyed!' })
    })
    .catch(error => {
      res.status(500).json(error)
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