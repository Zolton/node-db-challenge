const db = require("../dbConfig");

module.exports = {
  getProjectList,
  getResourceList,
  getTaskList,
  addResources,
  addProject,
  addTask,
  getProjectById
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

// SELECT projects.projectName, projects.projectDescription, projects.Completed, task.id, task.ToDo, task.Notes, task.Completed, resources.id, resources.resourceName, resources.resourceName
// FROM projects
// inner JOIN quantity on projects.id = quantity.project_id
// INNER JOIN resources on quantity.resource_id = resources.id
// inner JOIN task ON projects.id = task.project_id

function getProjectById (id) {
    return db("projects")
    .join("quantity", "projects.id", "=", "quantity.project_id")
    .where("quantity.project_id", "=", id)
    .join("task", "task.project_id", "=", "projects.id")
    .where("task.project_id", "=", id)
    //.join("resources", "resources.id", "=", "quantity.resource_id")
    
    
   .select("projectName", "projectDescription", "ToDo", "Notes")
    

    
}