var Comments = require('../models/comment')
var router = require('express').Router()


router.get('/api/posts/:id/comments', (req, res, next) => {
    Comments.find({})
        .then(comments => {
            res.send(comments)
        })
        .catch(err => {
            res.status(400).send({ Error: err })
        })
})

router.get('/api/posts/:id/comments/:id', (req, res, next) => {
    Comments.findById(req.params.id)
        .populate('comments')
        .then(comment => {
            res.send(comment)
        })
        .catch(err => {
            res.status(400).send({ Error: err })
        })
})

router.post('/api/posts/:id/comments', (req, res, next) => {
    req.body.creatorId = req.session.uid
    req.body.postId = req.session.uid
    Comments.create(req.body)
        .then(comment => {
            if (!req.session.uid) {
                return res.status(401).send("Please login to comment.")
            }
            let response = {
                data: comment,
                message: 'Successfully created Comment!'
            }
            res.send(response)
        })
        .catch(err => {
            res.status(400).send({ Error: err })
        })
})


router.put('/api/posts/:id/comments/:id', (req, res, next) => {
    var action = 'Update Comment'
    Comments.findById(req.params.id, req.body)
        .then(data => {
            if (comment.creatorId.toString() != req.session.uid) {
                return res.status(401).send('UNAUTHORIZED')
            }
            comment.put()
            res.send(data)
        })
        .catch(err => {
            res.status(400).send(err)
        })
})


router.delete('/api/posts/:id/comments/:id', (req, res, next) => {
    Comments.findById(req.params.id)
        .then((comment) => {
            if (comment.creatorId.toString() != req.session.uid) {
                return res.status(401).send('UNAUTHORIZED')
            }
            comment.remove()
            res.send({ message: 'So much for that comment!' })
        })
        .catch(err => {
            res.status(400).send({ Error: err })
        })
})


module.exports = router