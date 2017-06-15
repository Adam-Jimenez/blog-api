const express = require('express')
const app = express()
const cors = require('cors')
const db = require('../db')
const bodyParser = require('body-parser')

app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.status(200).json({})
})

app.get('/posts', (req, res) => {
    db.Post.findAll()
    .then((posts) => {
        res.json(posts)
    })
})

app.get('/posts/latest', (req, res) => {
    db.Post.findOne({ order:'`created_at` DESC'})
    .then((post) => {
        res.json(post)
    })
})

app.get('/posts/:id', (req, res) => {
    db.Post.findById(req.params.id)
    .then((post) => {
        res.json(post)
    })
})

app.post('/posts', (req, res) => {
    db.Post.create({
        title: req.body.title,
        content: req.body.content
    })
    .then((post) => {
        res.send(post)
    })
})

module.exports = app
