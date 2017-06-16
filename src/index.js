/**
 *
 * src/index.js
 *
 * exposes all modules in src/node_modules
 *
 */

const fs = require('fs')
const _ = require('lodash')

const files = fs.readdirSync(`${__dirname}/node_modules`)
const modules = {}

_.each(files, (file) => {
    modules[file] = require(`./node_modules/${file}`)
})

module.exports = modules
