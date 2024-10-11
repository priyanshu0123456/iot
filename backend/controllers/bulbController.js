const OnOffModel  = require('../models/onoffSchema');
const fanModel = require('../models/fanSchema');


const bulbController = async(req, res) => {
  try {
    console.log(req.body); 
    // Find the latest document in the collection
    const latestDocument = await OnOffModel.findOne({}, {}, { sort: { _id: -1 } });

    if (!latestDocument) {
      //If no documents exist, create a new one with "on" set to false
      const newDocument = new OnOffModel({ on: false });
      await newDocument.save();
      res.status(201).json(newDocument);
    } else {
      latestDocument.on = !latestDocument.on;
      await latestDocument.save();
      res.status(200).json(latestDocument);
    }

  }catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }

};

const fanController = async(req, res) => {
  try {

    console.log(req.body);

    const latestDocument = await fanModel.findOne({}, {}, { sort: { _id: -1 } });

    if (!latestDocument) {
   
      const newDocument = new  fanModel({ on: false });
      await newDocument.save();
      res.status(201).json(newDocument);

    }else {
      latestDocument.on = !latestDocument.on;
      await latestDocument.save();
      res.status(200).json(latestDocument);
    }

  }catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = { bulbController,  fanController };
