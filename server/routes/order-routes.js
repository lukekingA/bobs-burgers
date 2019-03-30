let router = require('express').Router()
let Orders = require('../models/order')
let Meals = require('../models/meal')
let Entrees = require('../models/entree')
let Drinks = require('../models/drink')
let Sides = require('../models/side')

//GET
router.get('/', (req, res, next) => {
  Orders.find({}).then(orders => {
    res.send(orders)
  })
})
//POST
//make empty order
router.post('/', (req, res, next) => {
  Orders.create(req.body).then(order => {
    res.send({
      data: order,
      message: 'Created Order'
    })
  })
})

router.put('/:id', (req, res, next) => {
    Orders.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true }).then(doc => {
        res.send({
            data: doc,
            message:"Successfully updated order"
        })
    }).catch(err => {
        res.status(400).send("Couldn't update order")
    })
})
//make empty meal associated with order
router.post('/meals', (req, res, next) => {
  Meals.create(req.body).then(meal => {
    res.send({
      data: meal,
      message: 'Created Meal'
    })
  })
})
//make entree without components
router.post('/entree', (req, res, next) => {
  Entrees.create(req.body).then(entree => {
    res.send({
      data: entree,
      message: 'Created Entree'
      })
  }).catch(err => {
      res.status(400).send(err)
  })
})
//add entree components
router.put('/entree/:id', (req, res, next) => {
  Entrees.findById({
    _id: req.params.id
  }).then(entree => {
    entree.components.push(req.body)
    entree.update(err => {
      if (err) {
        res.status(400).send('Can not update entree')
      }
      res.send('Updated entree')
    })
  })
})
//add drink
router.post('/drink', (req, res, next) => {
  Drinks.create(req.body).then(drink => {
    res.send({
      data: drink,
      message: 'DrinkCreated'
    })
  }).catch(err => {
      res.status(400).send(err)
  })
})

router.post('/side', (req, res, next) => {
  Sides.create(req.body).then(side => {
    res.send({
      data: side,
      message: 'Side Created'
    })
  }).catch(err => {
      res.status(400).send(err)
  })
})
//PUT

//DELETE
router.delete('/', (req, res, next) => {
  Orders.deleteMany({}).then((data) => {
    res.send(data)
  })
})

module.exports = router

