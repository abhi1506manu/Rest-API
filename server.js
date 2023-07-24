const express = require("express");
const mongoose = require('mongoose')
require('dotenv').config()

const subscriberRouter = require('./routes/subscriberRouter')
const Subscriber = require('./models/db')

const url = process.env.mongodb;
const app = express();

//middleware - pass all the data in json format
app.use(express.json())

//subscriberRoute
app.use('/subscribers', subscriberRouter);

app.listen(5000, () => {
  console.log("Server listenng on port 3000");
});

mongoose.connect((url))
.then(()=>{
    console.log('MongoDb Connected')
})
.catch((error)=>{
    console.log(error)
})
