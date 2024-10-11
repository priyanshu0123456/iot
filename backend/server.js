const express = require('express') ;
const app = express() ;
const cors = require('cors') ;


app.use(cors())

//using the .env file data.. 
require('dotenv').config() ;

PORT = process.env.PORT || 4000 ;

//middleware for passing the json data
app.use(express.json()) ;


//routes mounting 
const routes = require('./routers/toggle.js');
app.use('/api/v1'  , routes);

//conneting to the mongodb server...
const connectDb = require('./config/connectdatabase');
connectDb() ;


app.get('/' , (req , res) =>{
      res.send("Welcome User !!!") ;
})


app.listen(PORT , ()=>{
      console.log(`Server is runing at the Port ${PORT}`) ;
})
