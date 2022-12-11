
const express=require('express');
const morgan=require('morgan');
const bodyParser=require('body-parser');
const userLoginRouter = require('./routes/userLoginRouter');

const app=express()

app.use(morgan('dev'))



app.use(bodyParser.json())

app.use('/login',userLoginRouter)


app.use('/', express.static('../build'));

app.listen(process.env.PORT||3000,()=>{
    console.log("server running on port " + (process.env.PORT||3000))
})