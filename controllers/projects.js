const { get, insert, update, remove, validate } = require("../data/helpers/projectModel");

async function index(req, res) {
    try {
        const projects = await get();
        res.status(200).json(projects);
    } catch(e) {
        console.log(e)
        res.status(500).json({message: "An error occurred while trying to retrieve the list project"})
    }
}

function show(req, res) {
    if (req.params.id) {
        get(req.params.id)
        .then(result => {
            res.status(200).json(result)
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({message: "An error occurred while trying to retrieve project with the specified ID"})
        })
    } else {
        res.status(400).json({message: "Can't retrieve project with the specified ID"});
    }
}

function create(req, res) {
    const data = req.body;
    if (validate(req.body)) {
        insert(data)
        .then(lastInsertProject => {
            res.status(201).json(lastInsertProject);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({message: "An error occurred while trying to store project."})
        })
    } else {
        res.status(400).json({message: "\"name\" and \"description\" are required in request body."});
    }
}

function _update(req, res) {
    if (!req.params.id) {
        res.status(400).json({message: "Can't retrieve project with the specified ID"});
        return false;
    }
    if (!validate(req.body)) {
        res.status(400).json({message: "\"name\" and \"description\" are required in request body."});
        return false;
    }
    update(req.params.id, req.body)
    .then(result => {
        res.status(200).json(result)
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({message: "An error occurred while trying to update project with specified ID"})
    });
}

function del(req, res) {
    if (!req.params.id) {
        res.status(400).json({message: "Can't retrieve project with the specified ID"});
        return false;
    }
    remove(req.params.id)
    .then(result => {
        res.status(200).json({
            id: req.params.id
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({message: "An error occurred while trying to delete project with the specified ID."});
    })
}

module.exports = {
    index,
    show,
    create,
    _update,
    del
}