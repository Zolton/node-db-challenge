const db = require("../dbConfig");

module.exports = {
  getProjectList,
  getResourceList,
  getTaskList,
  addResources,
  addProject,
  addTask
};

function getProjectList() {
  return db("projects");
}

function getResourceList() {
  return db("resources");
}

// SELECT projects.projectName, projects.projectDescription, task.ToDo, task.Notes
// FROM projects
// inner JOIN task on projects.id = task.project_id

function getTaskList() {
  return db("task")
    .join("projects", "projects.id", "=", "task.project_id")
    .select("ToDo", "Notes", "task.Completed", "projectName", "projectDescription");
}

function addResources(newResource) {
  return db("resources").insert(newResource);
}

function addProject(newProject) {
  return db("projects").insert(newProject);
}

function addTask (newTask) {
    return db("task").insert(newTask)
}