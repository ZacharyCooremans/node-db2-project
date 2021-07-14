const express = require("express")
const carsRouter = require('./cars/cars-router')

const server = express()

// DO YOUR MAGIC
server.use(express.json())

server.use('/api/cars', carsRouter)

// server.use('*', (req, res, next) => {
//     next({ status: 404, message: 'not found!' })
// })
server.get("/", (req, res) => {
    res.status(200).json({
        message: "THIS IS WORKING"
    })
})

server.use((err, req, res, next) => { // eslint-disable-line
    res.status(err || 500).json({
        message: err.message
    })
})

module.exports = server
