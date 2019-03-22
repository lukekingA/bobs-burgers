let router = require('express').Router()
let Entrees = require('../menuModels/entreeM')
let Drinks = require('../menuModels/drinkM')
let Sides = require('../menuModels/sideM')
let EntreeItems = require('../menuModels/entreeItem')
let Comments = require('../menuModels/commentM')

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
//change to findByOneAndUpdate to return the doc with {new:true}
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

router.get('/drinks/', (req, res, next) => {
    Drinks.find({}).then(drinks => {
        if (!drinks) {
            res.status(400).send("Drinks Not Found")
        }
        res.send(drinks)
    })
})

router.post('/drinks/', (req, res, next) => {

    Drinks.create(req.body)
        .then(data => {
            res.send({
                message: 'Successfully Created Drink',
                data: data
            })
        })
})

router.delete('/drinks/:id', (req, res, next) => {
    Drinks.findByIdAndRemove({
        _id: req.params.id
    }).then(drink => {
        res.send('Drink Successfully Deleted')
    })
        .catch(err => {
            res.status(400).send('ACCESS DENIED; Invalid Request')
        })
})
//POST
router.get('/sides/', (req, res, next) => {
    Sides.find({}).then(sides => {
        if (!sides) {
            res.status(400).send("Sides Not Found")
        }
        res.send(sides)
    })
})

router.post('/sides/', (req, res, next) => {
    Sides.create(req.body)
        .then(data => {
            res.send({
                message: 'Successfully Created A Side',
                data: data
            })
        })
})

router.delete('/sides/:id', (req, res, next) => {
    Sides.findByIdAndRemove({
        _id: req.params.id
    }).then(side => {
        res.send('Side Successfully Deleted')
    })
        .catch(err => {
            res.status(400).send('ACCESS DENIED; Invalid Request')
        })
})
//Commments!!!
router.get('/comments/', (req, res, next) => {
    Sides.find({}).then(comments => {
        if (!comments) {
            res.status(400).send("Sides Not Found")
        }
        res.send(comments)
    })
})

router.post('/comments/', (req, res, next) => {
    Comments.create(req.body)
        .then(data => {
            res.send({
                message: 'Successfully Created A Comment',
                data: data
            })
        })
})
router.delete('/comments/:id', (req, res, next) => {
    Comments.findByIdAndRemove({
        _id: req.params.id
    }).then(comment => {
        res.send('Comment Successfully Deleted')
    })
        .catch(err => {
            res.status(400).send('ACCESS DENIED; Invalid Request')
        })
})
//DELETE

//#endregion 




module.exports = router