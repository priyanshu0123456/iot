const mongoose = require('mongoose');

require('dotenv').config() ;

const url = process.env.URL ;

const connectDb = () => {

    mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(
        () => {
            console.log("database connnect succesfully !!!");
        }
    ).catch(error => {
        console.log(error);
    })
}

module.exports = connectDb ;