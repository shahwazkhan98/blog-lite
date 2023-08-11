const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const colors = require('colors')


//rest object
const app = express()

//middlewares
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))
const dotenv = require('dotenv')
const { connectDB } = require('./config/db')



//env config
dotenv.config()

//router import
const userRoutes = require('./routes/userROutes')
const blogRoutes = require('./routes/blogROutes')

//mongoDB connection
connectDB()

//routes 
app.use('/api/user' , userRoutes)
app.use('/api/blog' , blogRoutes)
//Port
const PORT = process.env.PORT || 3000

//listen
app.listen(8000 , () => {
    console.log(`Server Running at PORT : ${PORT}`.bgCyan.white)
})