//require mongoose
const mongoose = require('mongoose');
//require model
const Schema = mongoose.Schema;
const TeamSchema = new Schema({
    team: {
        type: String,
    }
});
const Team = mongoose.model('Team', TeamSchema);

//export model
module.exports = Team;