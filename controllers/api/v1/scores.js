const getAll = (req, res) => {
    res.json({"status": 'Success', "data": {"scores": [{"id": 1, "score": 100}, {"id": 2, "score": 200}]}})
};

const create = (req, res) => {
    res.json({"status": 'Success'})
}

//export controller
module.exports.getAll = getAll;
module.exports.create = create;