const express = require('express')
const morgan = require('morgan')
const fs = require('fs')
const path = require('path')

const app = express()
const port = 3000

const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })

app.use(morgan('combined', { stream: accessLogStream }))

app.use(morgan('combined'))
app.use(morgan('common'))
app.use(morgan('short'))
app.use(morgan('dev'))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

