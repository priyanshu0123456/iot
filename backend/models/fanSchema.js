const mongoose = require("mongoose") ;


const fanSchema = new mongoose.Schema({
      on:{
           type:Boolean ,
           required:true 
        }
})

const fanModel = mongoose.model('fanonoff' , fanSchema ) ;
module.exports = fanModel ;