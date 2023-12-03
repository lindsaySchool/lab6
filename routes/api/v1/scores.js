//require express
const express = require('express');
//require router
const router = express.Router();
//require controller
const scoresController = require('../../../controllers/api/v1/scores');

router.get('/', scoresController.getAll);

router.post ('/', scoresController.create);

//export router
module.exports = router;