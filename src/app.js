require('dotenv').config()
require('./config/database')
const express = require('express')
const cors = require('cors')

const app = express()
const port = 3333

app.use(express.json())
app.use(cors())

app.listen(port, () => console.info('[INFO] Server is running...'))
