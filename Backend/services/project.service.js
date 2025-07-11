const db = require("../config/db");

exports.getAllProjects = async () => {
  const [rows] = await db.query(`SELECT * FROM Projects`);
  return rows;
};

exports.getProjectsById = async (projectId) => {
  const [rows] = await db.query(`SELECT * FROM Projects WHERE ProjectId = ?`, [
    projectId,
  ]);

  if (rows.length == 0) throw { message: "Invalid ProjectId" };

  return rows;
};

exports.getProjectsByTag = async (tagId) => {
  const [rows] = await db.query(
    `
    SELECT p.*
    FROM Projects p
    JOIN ProjectTags pt ON p.ProjectID = pt.ProjectID
    WHERE pt.TagID = ?
  `,
    [tagId]
  );
  return rows;
};

exports.getProjectsByClub = async (clubId) => {
  const [rows] = await db.query(`SELECT * FROM Projects WHERE ClubID = ?`, [
    clubId,
  ]);
  return rows;
};

exports.editProjectsById = async (projectId, project) => {
  // First check if the project exists
  const [existingProject] = await db.query(
    `SELECT * FROM Projects WHERE ProjectID = ?`,
    [projectId]
  );

  if (existingProject.length === 0) {
    throw { message: "Project not found", status: 404 };
  }

  // Build the UPDATE query dynamically based on provided fields
  const updateFields = [];
  const updateValues = [];
  
  // List of allowed fields that can be updated
  const allowedFields = [
    'Title', 'Duration', 'ClubID', 'Description', 
    'Difficulty', 'Objective', 'Methodology', 
    'CoverImage', 'FutureProspects'
  ];

  // Add fields to update if they exist in the project object
  allowedFields.forEach(field => {
    if (project[field] !== undefined) {
      updateFields.push(`${field} = ?`);
      updateValues.push(project[field]);
    }
  });

  // If no fields to update, return the existing project
  if (updateFields.length === 0) {
    return existingProject;
  }

  // Add projectId to the end of values array for WHERE clause
  updateValues.push(projectId);

  // Execute the UPDATE query
  const updateQuery = `UPDATE Projects SET ${updateFields.join(', ')} WHERE ProjectID = ?`;
  await db.query(updateQuery, updateValues);

  // Return the updated project
  const [updatedProject] = await db.query(
    `SELECT * FROM Projects WHERE ProjectID = ?`,
    [projectId]
  );

  return updatedProject;
};
