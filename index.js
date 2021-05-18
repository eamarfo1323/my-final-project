const express = require('express')
const cors = require('cors')
const routes = require('./routes')
const connectDB = require('./db')

const server = express()
const port = 4000
server.use(express.json())
server.use(cors())

connectDB()


server.use('/api/v2',routes)

server.listen(port, ()=> console.log("Server is running on port 4000"))