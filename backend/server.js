const express = require('express')
const dotenv = require('dotenv')
const productRoutes = require('./routes/productRoutes')
const userRoutes = require('./routes/userRoutes')
const connectDB = require('./config/db.js')
const colors = require('colors')
dotenv.config()
connectDB()
const app=express()
app.use(express.json())
app.listen(process.env.PORT,()=>{
    console.log(`server running on port ${process.env.PORT}`)
})

app.use('/products',productRoutes)
app.use('/users',userRoutes)