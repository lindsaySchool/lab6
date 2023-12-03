const Score = require('../../../models/Score');

const getAll = (req, res) => {
    Score.find()
        .then(docs => {
            res.json({ 
                "status": "succes",
                "data": {
                    "scores": docs.map(doc => ({ score: doc.score, team: doc.team }))
                } 
            });
        })
        .catch(err => {
            console.log(err);
        });
};

const create = (req, res) => {
    let score = new Score();
    score.score = req.body.score;
    score.team = req.body.team;
    score.save()
        .then(doc => {
            console.log("geen error");
            res.json({ 
                "status": "succes",
                "data": {
                    "score": doc
                } 
            });
        })
        .catch(err => {
            console.log(err);
            res.json({ 
                "status": "error",
                "message": "Could not save this score"
            });
        });
}

//PUT /api/v1/scores/:id
const update = (req, res) => {
    let id = req.params.id;
    Score.findOneAndUpdate({ _id: id }, { score: req.body.score, team: req.body.team })
        .then(doc => {
            res.json({ 
                "status": "succes",
                "data": {
                    "score": doc
                } 
            });
        })
        .catch(err => {
            console.log(err);
            res.json({ 
                "status": "error",
                "message": "Could not update this score"
            });
        });
};

//export controller
module.exports.getAll = getAll;
module.exports.create = create;
module.exports.update = update;