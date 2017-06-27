const fs = require('fs')
const https = require('https')

const src = require('./src')

const config = src.config
const app = src.rest

if (config.https.active) {
    const options = {
        key: fs.readFileSync(config.https.privateKeyPath),
        cert: fs.readFileSync(config.https.certificatePath)
    }
    https.createServer(options, app).listen(config.port, () => {
        console.log(`Blog API listening on port ${config.port} using HTTPS`)
    })
} else {
    app.listen(config.port, () => {
        console.log(`Blog API listening on port ${config.port} using HTTP`)
    })
}
