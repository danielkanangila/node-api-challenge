const Project = require("../data/helpers/projectModel");
const Action = require("../data/helpers/actionModel");

async function validateProjectID(req, res, next) {
    try {
        const id = parseInt(req.params.id);
        const project = await Project.get(id);
        if (!project) {
            res.status(404).json({message: "Can't found the project with the specified ID"});
            return false;
        }
        req.project = project
        next();
    } catch (err) {
        console.error(err);
        res.status(500).json({message: "An error occurred while trying to retrieve the project with the specified id."})
        
    }
}

function validateProject(req, res, next) {
    if (!req.body.description || (req.body.description && !req.body.description.trim())) {
        res.status(400).json({message: "missing required description field in the request body."});
        return false;
    }
    if (!req.body.name || (req.body.name && !req.body.name.trim())) {
        res.status(400).json({message: "missing required name field in the request body."});
        return false;
    }
    next()
}

async function validateActionID(req, res, next) {
    try {
        const id = parseInt(req.params.actionId);
        const action = await Action.get(id);
        if (!action) {
            res.status(404).json({message: "Can't found the action with the specified ID"});
            return false;
        }
        req.action = action;
        next();
    } catch (err) {
        console.error(err);
        res.status(500).json({message: "An error occurred while trying to retrieve the action with the specified id."});
    }
}

function validateAction(req, res, next) {
    if (!req.body.description || (req.body.description && !req.body.description.trim())) {
        res.status(400).json({message: "missing required description field in the request body."});
        return false;
    }
    if (!req.body.notes || (req.body.notes && !req.body.notes.trim())) {
        res.status(400).json({message: "missing required notes field in the request body."});
        return false;
    }
    next()
}

module.exports = {
    validateProjectID,
    validateProject,
    validateActionID,
    validateAction
}