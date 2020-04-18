const { get, insert, update, remove } = require("../data/helpers/projectModel");

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
   res.status(200).json(req.project);
}

function create(req, res) {
    insert(req.body)
    .then(lastInsertProject => {
        res.status(201).json(lastInsertProject);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({message: "An error occurred while trying to store project."})
    })
}

function _update(req, res) {
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