//require express
const express = require('express');
//require router
const router = express.Router();

router.get('/', (req, res) => {
    res.json({"status": 'Success', "data": {"scores": [{"id": 1, "score": 100}, {"id": 2, "score": 200}]}})
});

router.post ('/', (req, res) => {
    res.json({"status": 'Success'})
});

//export router
module.exports = router;