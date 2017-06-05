const express = require('express')
const app = express()
const Sequelize = require('sequelize')

/*
 * Quick rest api prototyping
 */
const sequelize = new Sequelize('blog', process.env.DB_USER, process.env.DB_PASS, {
    host: 'localhost',
    dialect: 'mysql',
})

const Post = sequelize.define('post', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title: Sequelize.STRING,
    content: Sequelize.TEXT
}, {
    timestamps: true,
    paranoid: true,
    underscored: true
})

sequelize.sync()

app.get('/', (req, res) => {
    Post.create({
        title: 'Hey',
        content: 'test'
    })
    res.status(200).json({})
})

app.get('/posts', (req, res) => {
    Post.findAll()
    .then((posts) => {
        res.json(posts)
    })
})

app.listen(3000, () => {
    console.log('Blog API listening on port 3000')
})
