const Action = require("./../data/helpers/actionModel");
const Project = require("./../data/helpers/projectModel");

function index(req, res) {
    Project.getProjectActions(req.params.id)
    .then(result => {
        res.status(200).json(result);
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({message: "An occurred when trying to retrieve the list of actions."})
    })
}

function show(req, res) {
    res.status(200).json(req.action);
}

async function create(req, res) {   
    const data = {
        ...req.body,
        project_id: req.project.id
    }
    try {
        const action = await Action.insert(data);
        res.status(201).json(action);
    } catch (err) {
        console.error(err);
        res.status(500).json({message: "An error occurred while trying to save project information."})
    }
}

async function _update(req, res) {
    try {
        const action = await Action.update(req.params.id, req.body);
        res.status(200).json(action);
    } catch (err) {
        console.error(err);
        res.status(500).json({message: "An error occurred while trying to update project information."})
    }
}

async function del(req, res) {
    try {
       const deleted = await Action.remove(req.params.actionId);
       if (!deleted) {
            res.status(400).json({message: "Can't delete action with the specified ID"});
            return false;
       }
       res.status(200).json({id: req.params.actionId});
    } catch(err) {
        console.log(err);
        res.status(500).json({message: "An error occurred while trying to delete action with the specified ID"});
    }
}

module.exports = {
    index,
    show,
    create,
    _update,
    del
}