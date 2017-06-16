const src = require('./src')

const config = src.config
const app = src.rest

app.listen(config.port, () => {
    console.log(`Blog API listening on port ${config.port}`)
})
