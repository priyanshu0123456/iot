const express = require('express');

const   {bulbController , fanController}  = require('../controllers/bulbController');

const {bulbStatusController , fanStatusController } = require('../controllers/statusController');

const router = express.Router() ;

//toggle the bulb
router.post('/bulbtoggle' , bulbController);


//toggle the fan
router.post('/fantoggle'  , fanController) ;

//get the status of the bulb
router.get('/bulbstatus' , bulbStatusController);

//get the status of the fan
router.get('/fanstatus' , fanStatusController) ;



module.exports = router ;