const service = require('../services/project.service');
const { success, error } = require('../utils/responseHandler');

exports.getAll = async (req, res) => {
  try {
    const data = await service.getAllProjects();
    success(res, data);
  } catch (err) {
    error(res, err);
  }
};

exports.getById = async (req, res) => {
  try {
    const data = await service.getProjectsById(req.params.projectId);
    success(res, data);
  } catch (err) {
    error(res, err);
  }
};

exports.getByTag = async (req, res) => {
  try {
    const data = await service.getProjectsByTag(req.params.tagId);
    success(res, data);
  } catch (err) {
    error(res, err);
  }
};

exports.getByClub = async (req, res) => {
  try {
    const data = await service.getProjectsByClub(req.params.clubId);
    success(res, data);
  } catch (err) {
    error(res, err);
  }
};


exports.editById = async (req, res) => {
  try {
    const data = await service.editProjectsById(req.params.projectId, req.body);
    success(res, data);
  } catch (err) {
    error(res, err);
  }
};