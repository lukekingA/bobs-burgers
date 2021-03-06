let router = require('express').Router();
let Users = require('../models/user');
let session = require('./session')

//NEVER TELL USERS WHICH FAILED
let loginError = new Error('Bad Email or Password')

//CREATE A NEW USER
router.post('/auth/register', (req, res) => {
  //VALIDATE PASSWORD LENGTH
  if (req.body.password.length < 5) {
    return res.status(400).send({
      error: 'Password must be at least 6 characters'
    })
  }
  //CHANGE THE PASSWORD TO A HASHED PASSWORD
  req.body.hash = Users.generateHash(req.body.password)
  //CREATE THE USER
  Users.create(req.body)
    .then(user => {
      //REMOVE THE PASSWORD BEFORE RETURNING
      delete user._doc.hash
      //SET THE SESSION UID (SHORT FOR USERID)
      req.session.uid = user.id
      res.status(201).send(user)
    })
    .catch(err => {
      res.status(400).send(err)
    })
})

//EDITS EMPLOYEE
router.put('/auth/edit', (req, res) => {
  Users.findByIdAndUpdate({
      _id: req.body._id
    }, req.body)
    .then(data => {
      res.send('succes')
    })
    .catch(err => {
      console.error(err)
    })
})

//CREATE A NEW EMPLOYEE
router.post('/auth/newemployee', (req, res) => {
  if (req.body.password.length < 5) {
    return res.status(400).send({
      error: 'Password must be at least 6 characters'
    })
  }
  req.body.hash = Users.generateHash(req.body.password)
  Users.create(req.body)
    .then(user => {
      res.status(201).send(user)
    })
    .catch(err => {
      res.status(400).send(err)
    })
})

router.post('/auth/login', (req, res) => {
  //FIND A USER BASED ON PROVIDED EMAIL
  Users.findOne({
      email: req.body.email
    })
    .then(user => {
      if (!user) {
        return res.status(400).send(loginError)
      }
      //CHECK THE PASSWORD
      user.validatePassword(req.body.password)
        .then(valid => {
          if (!valid) {
            return res.status(400).send(loginError)
          }



          //ALWAYS REMOVE THE PASSWORD FROM THE USER OBJECT
          delete user._doc.hash
          req.session.uid = user._id
          res.send(user)
        })
    }).catch(err => {
      res.status(400).send(loginError)
    })
})

//REMOVE THE ACTIVE SESSION FROM THE DATABASE
router.delete('/auth/logout', (req, res) => {
  req.session.destroy(err => {
    if (err) {
      return res.send(err)
    }
    return res.send({
      message: 'Logout Successful'
    })
  })
})


//Validates req.session.uid
router.get('/auth/authenticate', (req, res) => {
  Users.findById(req.session.uid)
    .then(user => {
      if (!user) {
        return res.status(401).send({
          error: 'Please login to continue'
        })
      }
      delete user._doc.hash
      res.send(user)
    }).catch(err => {
      res.status(500).send(err)
    })
})

router.get('/auth/all', (req, res) => {
  Users.find({}).then(data => {
    if (!data) {
      res.send('no data')
    }
    res.send(data)
  })
})

router.delete('/auth/:id', (req, res, next) => {
  Users.findByIdAndRemove(req.params.id)
    .then(() => {
      res.send('deleted succesfully')
    })
})

module.exports = {
  router,
  session
}