//require mongoose
const mongoose = require('mongoose');
//require model
const Schema = mongoose.Schema;
const ScoreSchema = new Schema({
    score: Number,
    team: String
});
const Score = mongoose.model('Score', ScoreSchema);


const getAll = (req, res) => {
    Score.find({ "user": "Jan" })
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
    score.score = "2";
    score.team = "Team 1";
    score.save()
        .then(doc => {
            console.log("geen error");
            res.json({ 
                "status": "succes",
                "data": {
                    "scores": doc
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
    res.json({"status": 'Success'})
}

//export controller
module.exports.getAll = getAll;
module.exports.create = create;