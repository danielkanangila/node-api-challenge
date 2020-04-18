const { get, insert, update, remove, validate } = require("./../data/helpers/actionModel");
const project = require("./../data/helpers/projectModel");

function index(req, res) {
    if (!req.params.id) {
        res.status(400).json({message: "Can't retrieve project with the specified ID"});
        return false;
    }
    project.getProjectActions(req.params.id)
    .then(result => {
        res.status(200).json(result);
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({message: "An occurred when trying to retrieve the list of actions."})
    })
}

function show(req, res) {

}

function create(req, res) {
    return save(req, res, insert, "create");    
    // try {
    //     if (!req.params.id) {
    //         res.status(400).json({message: "Can't retrieve project with the specified ID"});
    //         return false;
    //     }
    //     if (!validate(req.body)) {
    //         res.status(400).json({message: '"description" and "notes" are required.'});
    //         return false;
    //     }
    //     const project = await project.get(req.params.id)
    //     if (!project) {
    //         res.status(400).json({message: "Can't retrieve project with the specified ID"});
    //         return false;
    //     }
    //     const data = {...req.body, project_id: project.id}
    //     const result = await insert(data);

    //     res.status(200).json(result);
    // } catch(err) {
    //     console.log(err);
    //     res.status(500).json({message: "An occurred while trying to save action."})
    // }
}

async function _update(req, res) {
    return save(req, res, update, "update");
    // try {
    //     if (!req.params.id) {
    //         res.status(400).json({message: "Can't retrieve project with the specified ID"});
    //         return false;
    //     }
    //     if (!validate(req.body)) {
    //         res.status(400).json({message: '"description" and "notes" are required.'});
    //         return false;
    //     }
    //     const project = await project.get(req.params.id)
    //     if (!project) {
    //         res.status(400).json({message: "Can't retrieve project with the specified ID"});
    //         return false;
    //     }
    //     const data = {...req.body, project_id: project.id}
    //     const result = await update(data);

    //     res.status(200).json(result);
    // } catch(err) {
    //     console.log(err);
    //     res.status(500).json({message: "An occurred while trying to save action."})
    // }
}

async function del(req, res) {
    try {
        if (!req.params.actionId) {
            res.status(400).json({message: "Can't retrieve action with the specified ID"});
            return false;
        }
       const deleted = await remove(req.params.actionId);
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

async function save(req, res, cb, action) {
   
    try {
        if (!parseInt(req.params.id)) {
            res.status(400).json({message: "Can't retrieve project with the specified ID"});
            return false;
        }
        if (!validate(req.body)) {
            res.status(400).json({message: '"description" and "notes" are required in request body.'});
            return false;
        }
        if (action === 'update' && !parseInt(req.params.actionId)) {
            res.status(400).json({message: "Can't retrieve action with the specified ID"});
            return false;
        }
        const p = await project.get(req.params.id)
        if (!p) {
            res.status(400).json({message: "Can't retrieve project with the specified ID"});
            return false;
        }
        const data = action === 'create' ? {...req.body, project_id: p.id} : req.body;

        const result = action === 'create' ? await cb(data) : await cb(req.params.actionId, data)

        res.status(200).json(result)
    } catch(err) {
        console.log(err);
        res.status(500).json({message: "An occurred while trying to save action."})
    }
}

module.exports = {
    index,
    show,
    create,
    _update,
    del
}