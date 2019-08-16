
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('task').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('task').insert([
        {ToDo: "Get code monkeys to use magic box to get paper", Notes: "Tell them to work faster if needed"},
        {ToDo: "Fire code monkeys when they protest", Notes: "Always more where they came from"},
        {ToDo: "Give magic box to newly hired code monkeys", Notes: "Don't tell about fate of last code monkeys unless required"}
      ]);
    });
};
