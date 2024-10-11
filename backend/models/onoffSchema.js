const mongoose = require('mongoose');
// Define the schema for the "on-off" for the bulb controll
const onOffSchema = new mongoose.Schema({
  on:{
    type: Boolean,
    required: true,
  },

});

// Create a model based on the schema
const OnOffModel = mongoose.model('OnOff', onOffSchema);

module.exports = OnOffModel;
