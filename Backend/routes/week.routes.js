const express = require('express');
const controller = require('../controllers/week.controller');
const router = express.Router();

router.get('/project/:projectId', controller.getByProject);
router.post('/project/:projectId', controller.addWeekPlan);
router.post('/project/:projectId/week/:week/resources', controller.updateWeekResources);

module.exports = router;
