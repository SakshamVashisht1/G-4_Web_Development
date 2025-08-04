const express = require('express')
require('dotenv').config()
const mongoose = require('mongoose')

const app = express()
const PORT = process.env.PORT || 4888

async function dbConnect() {
    await mongoose
        .connect(process.env.CONNECTION_URI + '/' + process.env.DATABASE_NAME)
        .then(() => {
            console.log('Database connected')
        })
        .catch((err) => {
            console.log('Database connection error:', err)
        })
}

dbConnect().then(() => {
    app.listen(PORT, () => {
        console.log('Server running on port : ', PORT)
    })
})
