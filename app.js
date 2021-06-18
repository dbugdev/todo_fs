const express = require('express')
const router = require('./router/router')


const app = express()

app.set('view engine','ejs')
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use("/",router)

app.listen(3000)