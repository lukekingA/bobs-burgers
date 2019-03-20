let router = require('express').Router()
let Entrees = require('../menuModels/entreeM')
let Drinks = require('../menuModels/drinkM')
let Sides = require('../menuModels/sideM')
let EntreeItems = require('../menuModels/entreeItem')

// #region --entree item
router.get('/item', (req, res, next) => {
    EntreeItems.find({}).then(data => {
        if (!data) {
            res.status(400).send('No data found')
        }
        res.send(data)
    })
})

router.post('/item', (req, res, next) => {
    EntreeItems.create(req.body).then(item => {
        res.send(item)
    }).catch(err => {
        console.log(err)
        next()
    })
})

//#endregion



//#region ---ENTREE---
//GET
router.get('/entrees', (req, res, next) => {
    console.log(req)
    Entrees.find()
        .then(data => {
            res.send(data)
        })
})

router.post('/entrees', (res, req, next) => {
    req.body.employeeId = req.session.uid
    Entrees.create(req.body)
        .then(data => {
            res.send(data)
        })
})
//POST

//PUT

//DELETE

//#endregion 




module.exports = router