const express = require("express");
const router = express.Router();
const {
    validateProject,
    validateProjectID,
    validateAction,
    validateActionID
} = require("./../middleware");

const projectController = require("../controllers/projects");
const actionController = require("./../controllers/actions");

// project endpoints
router.get('/projects', projectController.index);
router.post('/projects', validateProject , projectController.create);
router.get('/projects/:id', validateProjectID, projectController.show);
router.put('/projects/:id', validateProjectID, validateProject, projectController._update);
router.delete('/projects/:id', validateProjectID, projectController.del);
// actions endpoints
router.get('/projects/:id/actions', validateProjectID, actionController.index);
router.post('/projects/:id/actions', validateProjectID, validateAction, actionController.create);
router.get('/projects/:id/actions/:actionId', validateProjectID, validateActionID, actionController.show);
router.put('/projects/:id/actions/:actionId', validateProjectID, validateActionID, validateAction, actionController._update);
router.delete('/projects/:id/actions/:actionId', validateProjectID, validateActionID, actionController.del);

module.exports = router;
