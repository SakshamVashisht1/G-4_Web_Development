const mongoose = require('mongoose')

const dbConnect = async () => {
    await mongoose
        .connect(`${process.env.CONNECTION_URI}/${process.env.DATABASE_NAME}`)
        .then(() => {
            console.log('DB CONNECTED')
        })
}

module.exports = dbConnect
