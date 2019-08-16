const express = require("express");
const router = express.Router();
const helperFunctions = require("./dbHelperFunctions");

router.get("/projects", (req, res) => {
  helperFunctions
    .getProjectList()
    .then(project => {
      project.map(tag => {
        if (tag.Completed == 0) {
          tag.completed = "false";
        }
        if (tag.Completed == 1) {
          tag.completed = "true";
        }
      });
      res.status(200).json(project);
    })
    .catch(error => {
      res.status(500).json({ Error: "Server status: 500" });
    });
});

router.get("/resources", (req, res) => {
  helperFunctions
    .getResourceList()
    .then(resource => {
      res.status(200).json(resource);
    })
    .catch(error => {
      res.status(500).json({ Error: "Server status: 500" });
    });
});

router.get("/tasks", (req, res) => {
  helperFunctions
    .getTaskList()
    .then(taskFetch => {
      taskFetch.map(tag2 => {
        if (tag2.Completed == 0) {
          tag2.Completed = "false";
        }
        if (tag2.Completed == 1) {
          tag2.Completed = "true";
        }
      });
      res.status(200).json(taskFetch);
    })
    .catch(error => {
      res.status(500).json({ Error: "Server status: 500" });
    });
});

router.post("/resources", (req, res) => {
  newResource = req.body;
  helperFunctions
    .addResources(newResource)
    .then(newResources => {
      res.status(200).json(newResources);
    })
    .catch(error => {
      res.status(500).json({ Error: "Server status: 500" });
    });
});

router.post("/projects", (req, res) => {
  newProject = req.body;
  helperFunctions
    .addProject(newProject)
    .then(newProj => {
      res.status(200).json(newProj);
    })
    .catch(error => {
      res.status(500).json({ Error: "Server status: 500" });
    });
});

router.post("/tasks", (req, res) => {
  newTask = req.body;
  helperFunctions
    .addTask(newTask)
    .then(newT => {
      res.status(200).json(newT);
    })
    .catch(error => {
      res.status(500).json({ Error: "Server status: 500" });
    });
});

router.get("/projects/:id", (req, res) => {
  const id = req.params.id;
  helperFunctions
    .getProjectById(id)
    .then(masterPlan => {
      res.status(200).json(masterPlan);
    })
    .catch(error => {
      res.status(500).json({ Error: "Server status: 500" });
    });
});

module.exports = router;
