const express = require('express')
const path = require('path')
const app = express()

app.use('/content-template', express.static(path.join(__dirname, 'docs')))
app.use('/content-frontend', express.static(path.join(__dirname, 'content-frontend/docs')))
app.listen(8080)
