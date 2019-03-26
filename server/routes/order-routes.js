let router = require('express').Router()
let Orders = require('../models/order')
let Meals = require('../models/meal')
let Entrees = require('../models/entree')

//GET

//POST
router.post('/', (req, res, next) => {
      Orders.create(req.body.order).then(order => {

        req.body.meals.forEach(m => {
          m.orderId = order._id
          router.post('/meals', (req, res, next) => {
            Meals.create(m).then(meal => {
              if (m.sandwich.name) {
                m.sandwich.mealId = meal._id
                router.post('/entree', () => {
                    Entrees.create(m.sandwich).then(sandwich => {
                      m.sandwich.components.forEach(comp => {
                        sandwich.components.push(comp)
                        sandwich.save(err => {
                          if (err) {
                            res.status(400).send('failure to save sandwich component')
                          }
                          res.send('saved sandwich component')
                        })
                      })
                    })
                  }
                })
            })

          })
        })
      })
    }

    //PUT

    //DELETE


    module.exports = router