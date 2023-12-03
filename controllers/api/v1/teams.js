const Team = require('../../../models/Team');

const getAll = (req, res) => {
    Team.find()
        .then(docs => {
            res.json({ 
                "status": "succes",
                "data": {
                    "teams": docs.map(doc => ({ team: doc.team }))
                } 
            });
        })
        .catch(err => {
            console.log(err);
        });
};

//export controller
module.exports.getAll = getAll;
