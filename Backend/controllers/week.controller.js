const service = require('../services/week.service');
const { success, error } = require('../utils/responseHandler');

exports.getByProject = async (req, res) => {
  try {
    const data = await service.getWeekPlanByProject(req.params.projectId);
    success(res, data);
  } catch (err) {
    error(res, err);
  }
};

exports.addWeekPlan = async (req, res) => {
  try {
    const data = await service.addWeekPlan(req.params.projectId, req.body);
    success(res, data);
  } catch (err) {
    error(res, err);
  }
};

exports.updateWeekResources = async (req, res) => {
  try {
    const data = await service.updateWeekResources(
      req.params.projectId,
      req.params.week,
      req.body.resources
    );
    success(res, data);
  } catch (err) {
    error(res, err);
  }
};
