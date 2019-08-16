
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {projectName: "Make an app", projectDescription: "Get an app listed"},
        {projectName: "Retire", projectDescription: "Get paid and stack paper"},
      ]);
    });
};
