let router = require('express').Router()
let Entrees = require('../menuModels/entreeM')
let Drinks = require('../menuModels/drinkM')
let Sides = require('../menuModels/sideM')
let EntreeItems = require('../menuModels/entreeItem')
let Comments = require('../menuModels/commentM')
let Tax = require('../menuModels/tax')

// #region --entree item
router.get('/item', (req, res, next) => {
    EntreeItems.find({}).then(data => {
        if (!data) {
            res.status(400).send('No data found')
        }
        res.send(data)
    })
})

router.post('/tax', (req, res, next) => {
    Tax.create(req.body).then(tax => {
        res.send(tax)
    }).catch(err => {
        res.status(400).send("Couldn't set tax")
    })
})

router.get('/tax', (req, res, next) => {
    Tax.find({}).then(tax => {
        res.send(tax)
    }).catch(err => {
        res.status(400).send("Couldn't find tax rate")
    })
})

//router.put('/tax',)

router.delete('/tax', (req, res, next) => {
    Tax.deleteMany({}).then(tax => {
        res.send('taxes deleted')
    }).catch(err => {
        res.status(400).send("Couldn't delete taxes")
    })
})

router.post('/item', (req, res, next) => {
    EntreeItems.create(req.body).then(item => {
        res.send(item)
    }).catch(err => {
        res.status(400).send("Couldn't make item")
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
        }).catch(err => {
            res.status(400).send("Couldn't make entree")
        })
})
//change to findByOneAndUpdate to return the doc with {new:true}
router.put('/entrees/:id', (req, res, next) => {
    Entrees.findByIdAndUpdate({
        _id: req.params.id
    }, req.body, {
        new: true
    }).then(doc => {
        res.send({
            message: 'Successfully updated entree',
            data: doc
        })
    }).catch(err => {
        res.status(400).send("Couldn't update entree")
    })
})


router.delete('/entrees/:id', (req, res, next) => {
    Entrees.findByIdAndRemove({
        _id: req.params.id
    }).then(entree => {
        res.send("Entree successfully Deleted")
    }).catch(err => {
        res.status(400).send('ACCESS DENIED; Invalid Request')
    })

})

router.get('/drinks/', (req, res, next) => {
    Drinks.find({}).then(drinks => {
        if (!drinks) {
            res.status(400).send("Drinks Not Found")
        }
        res.send(drinks)
    }).catch(err => {
        res.status(400).send("Couldn't get drinks")
    })
})

router.post('/drinks/', (req, res, next) => {
    Drinks.create(req.body)
        .then(data => {
            res.send({
                message: 'Successfully Created Drink',
                data: data
            })
        }).catch(err => {
            res.status(400).send("Couldn't make drink")
        })
})

router.delete('/drinks/:id', (req, res, next) => {
    Drinks.findByIdAndRemove({
            id: req.params.id
        })
        .then(drink => {
            res.send('Drink Successfully Deleted')
        })
        .catch(err => {
            res.status(400).send('ACCESS DENIED; Invalid Request')
        })
})

router.put('/drinks/:id', (req, res, next) => {
    Drinks.findByIdAndUpdate({
            _id: req.params.id
        }, req.body, {
            new: true
        })
        .then(drink => {
            res.send(drink)
        })
        .catch(err => {
            console.error(err)
        })
})

//POST
router.get('/sides/', (req, res, next) => {
    Sides.find({}).then(sides => {
        if (!sides) {
            res.status(400).send("Sides Not Found")
        }
        res.send(sides)
    }).catch(err => {
        res.status(400).send("Couldn't get sides")
    })
})

router.post('/sides/', (req, res, next) => {
    Sides.create(req.body)
        .then(data => {
            res.send({
                message: 'Successfully Created A Side',
                data: data
            })
        }).catch(err => {
            res.status(400).send({
                message: "Couldn't make side",
                error: err
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

router.put('/sides/:id', (req, res, next) => {
    Sides.findByIdAndUpdate({
            _id: req.params.id
        }, req.body)
        .then(side => {
            res.send(req.body)
        }).catch(err => {
            res.status(400).send('ACCESS DENIED; Invalid Request')
        })
})

//Commments!!!
router.get('/comments/', (req, res, next) => {
    Comments.find({}).then(comments => {
        if (!comments) {
            res.status(400).send("Comments Not Found")
        }
        res.send(comments)
    }).catch(err => {
        res.status(400).send("Couldn't get Comments")
    })
})

router.post('/comments/', (req, res, next) => {
    Comments.create(req.body)
        .then(data => {
            res.send({
                message: 'Successfully Created A Comment',
                data: data
            })
        }).catch(err => {
            res.status(400).send({
                message: "Couldn't make coment",
                error: err
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
//#endregion 

//DELETE

router.delete('/sides', (req, res, next) => {
    Sides.deleteMany({}).then(data => {
        res.send(data)
    }).catch(err => {
        res.status(400).send('ACCESS DENIED; Invalid Request')
    })
})

router.delete('/drinks', (req, res, next) => {
    Drinks.deleteMany({}).then(data => {
        res.send(data)
    }).catch(err => {
        res.status(400).send('ACCESS DENIED; Invalid Request')
    })
})

router.delete('/entrees', (req, res, next) => {
    Drinks.deleteMany({}).then(data => {
        res.send(data)
    }).catch(err => {
        res.status(400).send('ACCESS DENIED; Invalid Request')
    })
})





module.exports = router