const db = require('../config/db');

exports.getWeekPlanByProject = async (projectId) => {
  const [rows] = await db.query(
    `SELECT * FROM WeekWisePlan WHERE ProjectID = ? ORDER BY Week ASC`,
    [projectId]
  );
  return rows;
};

exports.addWeekPlan = async (projectId, weekData) => {
  // First check if the project exists
  const [projectExists] = await db.query(
    `SELECT ProjectID FROM Projects WHERE ProjectID = ?`,
    [projectId]
  );

  if (projectExists.length === 0) {
    throw { message: "Project not found", status: 404 };
  }

  // Check if week number already exists for this project
  const [existingWeek] = await db.query(
    `SELECT WeekID FROM WeekWisePlan WHERE ProjectID = ? AND Week = ?`,
    [projectId, weekData.Week]
  );

  if (existingWeek.length > 0) {
    throw { message: "Week plan already exists for this project", status: 409 };
  }

  // Validate required fields
  if (!weekData.Week || !weekData.Title) {
    throw { message: "Week number and Title are required", status: 400 };
  }

  // Insert the new week plan
  const [result] = await db.query(
    `INSERT INTO WeekWisePlan (ProjectID, Week, Title, Plan, Resources) VALUES (?, ?, ?, ?, ?)`,
    [
      projectId,
      weekData.Week,
      weekData.Title,
      weekData.Plan || null,
      weekData.Resources ? JSON.stringify(weekData.Resources) : null
    ]
  );

  // Return the created week plan
  const [newWeekPlan] = await db.query(
    `SELECT * FROM WeekWisePlan WHERE WeekID = ?`,
    [result.insertId]
  );

  return newWeekPlan[0];
};

exports.updateWeekResources = async (projectId, week, resources) => {
  // First check if the project exists
  const [projectExists] = await db.query(
    `SELECT ProjectID FROM Projects WHERE ProjectID = ?`,
    [projectId]
  );

  if (projectExists.length === 0) {
    throw { message: "Project not found", status: 404 };
  }

  // Check if the week plan exists for this project
  const [weekExists] = await db.query(
    `SELECT WeekID FROM WeekWisePlan WHERE ProjectID = ? AND Week = ?`,
    [projectId, week]
  );

  if (weekExists.length === 0) {
    throw { message: "Week plan not found for this project", status: 404 };
  }

  // Update the resources
  await db.query(
    `UPDATE WeekWisePlan SET Resources = ? WHERE ProjectID = ? AND Week = ?`,
    [JSON.stringify(resources), projectId, week]
  );

  // Return the updated week plan
  const [updatedWeekPlan] = await db.query(
    `SELECT * FROM WeekWisePlan WHERE ProjectID = ? AND Week = ?`,
    [projectId, week]
  );

  return updatedWeekPlan[0];
};
