const mongoose = require('mongoose')
const colors = require('colors')

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log(`DATABASE CONNECTED ${mongoose.connection.host}`.bgMagenta.white)
    } catch (error) {
        console.log(`MONGOOSE Connect Error ${error}`.bgRed.white)
    }
}

module.exports = {connectDB}