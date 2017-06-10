const Sequelize = require('sequelize')
const sequelize = new Sequelize('blog', process.env.DB_USER, process.env.DB_PASS, {
    host: 'localhost',
    dialect: 'mysql',
})

exports.Post = sequelize.import(__dirname + "/models/Post")

sequelize.sync()
