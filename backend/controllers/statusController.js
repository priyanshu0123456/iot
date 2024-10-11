const fanModel = require('../models/fanSchema');
const OnOffModel = require('../models/onoffSchema');

const bulbStatusController = async(req, res) => {
     try {
          const x = await OnOffModel.find();
          console.log(x);

          res.status(200).json({
               success: true,
               message: "we get the data succesfully!!",
               data: x
          })

     } catch (error) {
          res.status(404).json({
               success: false,
               message: "check your internet connection"
          })
     }
}

const fanStatusController = async (req, res) => {
     try {
          const x = await fanModel.find();
          console.log(x);

          res.status(200).json({
               success: true,
               message: "we get the data succesfully!!",
               data:x
          })

     } catch (error) {
          res.status(404).json({
               success:false,
               message:"check your internet connection"
          })
     }
}

module.exports = { bulbStatusController , fanStatusController };