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
router.post('/', (req, res, next) => {
  Orders.create(req.body).then(order => {
    res.send({
      data: order,
      message: 'Created Order'
    })
  })
})

router.post('/meals', (req, res, next) => {
  Meals.create(req.body).then(meal => {
    res.send({
      data: meal,
      message: 'Created Meal'
    })
  })
})

router.post('/entree', (req, res, next) => {
  Entrees.create(req.body).then(entree => {
    res.send({
      data: entree,
      message: 'Created Entree'
    })
  })
})

router.post('/entree/:id', (req, res, next) => {
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

router.post('/drink', (req, res, next) => {
  Drinks.create(req.body).then(drink => {
    res.send({
      data: drink,
      message: 'DrinkCreated'
    })
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

//     req.body.meals.forEach(m => {
//       m.orderId = order.id
//       let data = {
//         orderId: m.orderId,
//         price: m.price,
//         comment: m.comment
//       }
//       router.post('/meals', (req, res, next) => {
//         Meals.create(data).then(meal => {
//           if (m.sandwich.name) {
//             m.sandwich.mealId = meal._id
//             router.post('/entree', (req, res, next) => {
//               Entrees.create(m.sandwich).then(sandwich => {
//                 m.sandwich.components.forEach(comp => {
//                   sandwich.components.push(comp)
//                   sandwich.save(err => {
//                     if (err) {
//                       res.status(400).send('failure to save sandwich component')
//                     }
//                     res.send('saved sandwich component')
//                   })
//                 })
//               })
//             })
//           }
//           if (m.drink.name) {
//             router.post('/drink', (req, res, next) => {
//               Drinks.create(m.drink).then(drink => {
//                 res.send({
//                   data: drink,
//                   message: 'Sucessfully created drink'
//                 })
//               })
//             })
//           }
//           if (m.side.name) {
//             router.post('/side', (req, res, next) => {
//               Sides.create(m.side).then(side => {
//                 res.send({
//                   data: side,
//                   message: 'Successfully created side'
//                 })
//               })
//             })
//           }
//         })
//       })
//     })

//   })
// })