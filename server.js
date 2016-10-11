'use strict'

const express = require('express')

const port = process.env.PORT || 8080
const app = express()

// Enable if behind reverse proxy
app.enable('trust proxy')

// Serve static files
app.use(express.static(__dirname + '/public'))

// Serve index.html
app.get('*', (request, response) => {
  response.sendFile(__dirname + '/public/index.html')
})

// Start listening
app.listen(port)
console.log(`Server started on port ${port}`)
