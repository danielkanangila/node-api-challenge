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
router.get('/actions', actionController.index);
router.post('/actions', actionController.create);
router.get('/actions/:id', actionController.show);
router.put('/actions/:id', actionController._update);
router.delete('/actions/:id', actionController.del);

module.exports = router;
