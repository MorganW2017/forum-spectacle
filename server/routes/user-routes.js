var Users = require('../models/user')
var router = require('express').Router()


router.get('/api/users', (req, res, next) => {
    Users.find({})
        .then(users => {
            res.send(users)
        })
        .catch(err => {
            res.status(400).send({ Error: err })
        })
})

router.get('/api/users/:id', (req, res, next) => {
    Users.findById(req.params.id)
        .populate('comments')
        .then(user => {
            res.send(user)
        })
        .catch(err => {
            res.status(400).send({ Error: err })
        })
})

// router.user('/api/users', (req, res, next) => {
//     req.body.creatorId = req.session.uid

//     Users.create(req.body)
//         .then(user => {
//             if (!req.session.uid) {
//                 return res.status(401).send("Please login to create user.")
//             }
//             let response = {
//                 data: user,
//                 message: 'Successfully created User!'
//             }
//             res.send(response)
//         })
//         .catch(err => {
//             res.status(400).send({ Error: err })
//         })
// })


router.put('/api/users/:id', (req, res, next) => {
    var action = 'Update User'
    if (data.creatorId.toString() != req.session.uid) {
        return res.status(401).send('UNAUTHORIZED')
    }
    Users.findById(req.params.id, req.body)
        .then(data => {
            data.put()
            res.send(data)
        })
        .catch(err => {
            res.status(400).send(err)
        })
})

router.delete('/api/users/:id', (req, res, next) => {
    Users.findById(req.params.id)
        .then((user) => {
            if (user.creatorId.toString() != req.session.uid) {
                return res.status(401).send('UNAUTHORIZED')
            }
            user.remove()
            res.send({ message: 'So much for that user!' })
        })
        .catch(err => {
            res.status(400).send({ Error: err })
        })
})


module.exports = router