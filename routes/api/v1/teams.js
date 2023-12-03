//require express
const express = require('express');
//require router
const router = express.Router();
//require controller
const teamsController = require('../../../controllers/api/v1/teams');

router.get('/', teamsController.getAll);

//export router
module.exports = router;