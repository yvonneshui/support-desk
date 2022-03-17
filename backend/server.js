const express = require('express')
const dotenv = require('dotenv').config()

const color = require('colors')

const PORT = process.env.PORT || 8000

const {errorHandler} = require ('./middleware/errorMiddleware')

const connectDB = require('./config/db')

// connect database
connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))



app.get('/', (req,res) => {
	res.status(201).json({message:'Hello'})
})

//Routes
app.use('/api/users', require('./routes/userRoutes'))

app.use(errorHandler)

app.listen(PORT,()=>console.log(`server started on port ${PORT}`))

