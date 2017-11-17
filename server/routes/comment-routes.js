var Comments = require('../models/comment')
var router = require('express').Router()


router.get('/api/posts/:id/comments', (req, res, next)=>{
    Comments.find({})
        .then(comments =>{
            res.send(comments)
        })
        .catch(err =>{
            res.status(400).send({Error: err})
        })
})

router.get('/api/posts/:id/comments/:id', (req, res, next)=>{
    Comments.findById(req.params.id)
        .populate('comments')
        .then(comment=>{
            res.send(comment)
        })
        .catch(err =>{
            res.status(400).send({Error: err})
        })
})

router.post('/api/posts/:id/comments', (req, res, next)=>{
    req.body.userId = req.session.uid
    Comments.create(req.body)
        .then(comment => {
            let response = {
                data: comment,
                message: 'Successfully created Comment!'
            }
            res.send(response)
        })
        .catch(err =>{
            res.status(400).send({Error: err})
        })
})


router.put('/api/posts/:id/comments/:id', (req, res, next)=>{
    var action = 'Update Comment'
    Comments.findByIdAndUpdate(req.params.id, req.body)
        .then(data=>{
            res.send(data)
        })
        .catch(err =>{
            res.status(400).send(err)
        })
})


router.delete('/api/posts/:id/comments/:id', (req, res, next)=>{
    Comments.findByIdAndRemove(req.params.id)
        .then(()=>{
            res.send({message: 'So much for that comment'})
        })
        .catch(err =>{
            res.status(400).send({Error: err})
        })
})


module.exports = router