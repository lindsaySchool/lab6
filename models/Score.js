//require mongoose
const mongoose = require('mongoose');
//require model
const Schema = mongoose.Schema;
const ScoreSchema = new Schema({
    score: {
        type: Number,
    },
    team : {
        type: String,
    }
});
const Score = mongoose.model('Score', ScoreSchema);

//export model
module.exports = Score;