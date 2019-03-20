let router = require('express').Router()
let Entrees = require('../menuModels/entreeM')
let Drinks = require('../menuModels/drinkM')
let Sides = require('../menuModels/sideM')

// #region --entree item
router.post

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