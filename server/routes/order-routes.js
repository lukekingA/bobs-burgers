let router = require('express').Router()
let Orders = require('../models/order')
let Meals = require('../models/meal')
let Entrees = require('../models/entree')
let Drinks = require('../models/drink')
let Sides = require('../models/side')

//GET ALL
router.get('/', (req, res, next) => {
  Orders.find({}).then(orders => {
    res.send(orders)
  })
})

router.get('/meals', (req, res, next) => {
  Meals.find({}).then(meals => {
    res.send(meals)
  })
})

router.get('/entree', (req, res, next) => {
  Entrees.find({}).then(entrees => {
    res.send(entrees)
  })
})

router.get('/drink', (req, res, next) => {
  Drinks.find({}).then(drinks => {
    res.send(drinks)
  })
})

router.get('/side', (req, res, next) => {
  Sides.find({}).then(sides => {
    res.send(sides)
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
  Orders.findByIdAndUpdate({
    _id: req.params.id
  }, req.body, {
      new: true
    }).then(doc => {
      res.send({
        data: doc,
        message: "Successfully updated order"
      })
    }).catch(err => {
      res.status(400).send("Couldn't update order")
    })
})

router.get('/active/', (req, res, next) => {
  Orders.find({ 'activeOrder': true }).then(orders => {
    res.send(orders)
  }).catch(err => {
    res.status(400).send("No active orders")
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

router.delete('/meals/:id', (req, res, next) => {
  Meals.findByIdAndRemove({
    _id: req.params.id
  }).then(meal => {
    if (meal) {
      res.send({
        message: 'Successfully deleted meal',
        data: meal
      })
      res.status(400).send('Bad request no meal foundcd')
    }
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
      message: 'Drink Created'
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

//DELETE MANY Cleanup
router.delete('/', (req, res, next) => {
  Orders.deleteMany({}).then((data) => {
    res.send(data)
  })
})

router.delete('/meal', (req, res, next) => {
  Meals.deleteMany({}).then((data) => {
    res.send(data)
  })
})


router.delete('/entree', (req, res, next) => {
  Entrees.deleteMany({}).then((data) => {
    res.send(data)
  })
})

router.delete('/side', (req, res, next) => {
  Sides.deleteMany({}).then((data) => {
    res.send(data)
  })
})

router.delete('/drink', (req, res, next) => {
  Drinks.deleteMany({}).then((data) => {
    res.send(data)
  })
})

module.exports = router