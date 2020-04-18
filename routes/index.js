const express = require("express");
const router = express.Router();

const projectController = require("../controllers/projects");
const actionController = require("./../controllers/actions");

// project endpoints
router.get('/projects', projectController.index);
router.post('/projects', projectController.create);
router.get('/projects/:id', projectController.show);
router.put('/projects/:id', projectController._update);
router.delete('/projects/:id', projectController.del);
// actions endpoints
router.get('/projects/:id/actions', actionController.index);
router.post('/projects/:id/actions', actionController.create);
router.get('/projects/:id/actions/:actionId', actionController.show);
router.put('/projects/:id/actions/:actionId', actionController._update);
router.delete('/projects/:id/actions/:actionId', actionController.del);

module.exports = router;
