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


router.delete('/item/:id', (req, res, next) => {
    EntreeItems.findByIdAndRemove({
            _id: req.params.id
        })
        .then(entreeitem => {
            res.send("Entree item successfully Deleted")
        })
        .catch(err => {
            res.status(400).send('ACCESS DENIED; Invalid Request')
        })
})
//#endregion



//#region ---ENTREE---
//GET
router.get('/entrees', (req, res, next) => {
    console.log(req)
    Entrees.find({})
        .then(data => {
            res.send(data)
        }).catch(err => {
            console.log(err)
            next()
        })
})

router.get('/entrees/:id', (req, res, next) => {
    Entrees.findById({
        _id: req.params.id
    }).then(data => {
        if (!data) {
            res.status(400).send('No entree found')
        }
        res.send(data)
    }).catch(err => {
        console.log(err)
        next()
    })
})

router.post('/entrees', (req, res, next) => {
    Entrees.create(req.body)
        .then(data => {
            res.send(data)
        })
})

router.put('/entrees/:id', (req, res, next) => {
    Entrees.findById({
        _id: req.params.id
    }).then(entree => {
        if (!entree) {
            res.status(400).send('No entree with that Id')
        }
        entree.update(req.body, (err) => {
            if (err) {
                console.log(err)
                res.status(400).send('Failed to update entree')
            }
            res.send('Successfully updated entree')
        })
    })
})

router.delete('/entrees/:id', (req, res, next) => {
    Entrees.findByIdAndRemove({
            _id: req.params.id
        }).then(entree => {
            res.send("Entree successfully Deleted")
        })
        .catch(err => {
            res.status(400).send('ACCESS DENIED; Invalid Request')
        })
})
//POST

//PUT

//DELETE

//#endregion 




module.exports = router