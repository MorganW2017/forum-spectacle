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
    req.body.postId = req.params.id
    if (!req.session.uid) {
        return res.status(401).send("Please login to comment.")
    }
    Comments.create(req.body)
        .then(comment => {
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
    if (comment.creatorId.toString() != req.session.uid) {
        return res.status(401).send('UNAUTHORIZED')
    }
    Comments.findById(req.params.id, req.body)
        .then(data => {
            comment.put()
            res.send(data)
        })
        .catch(err => {
            res.status(400).send(err)
        })
})

router.put('/api/posts/:id/comments/:id', (req, res, next) => {
    var action = 'Update Vote'
    if (comment.creatorId.toString() != req.session.uid) {
        return res.status(401).send('UNAUTHORIZED')
    }
    Comments.findById(req.params.id, req.body)
        .then(data => {
            comment.put()
            res.send(data)
        })
        .catch(err => {
            res.status(400).send(err)
        })
})


router.delete('/api/posts/:postid/comments/:id', (req, res, next) => {
    Comments.findOneAndRemove({creatorId: req.session.uid, _id: req.params.id})
        .then(comment=>{
            console.log(comment)
            res.send('You deleted comment')
        })
        .catch(err => {
            res.status(400).send(err)
        })
})


module.exports = router