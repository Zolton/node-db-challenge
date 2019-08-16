
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('task').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('task').insert([
        {ToDo: "Get code monkeys to use magic box to get paper", Notes: "Tell them to work faster if needed", project_id: 1},
        {ToDo: "Fire code monkeys when they protest", Notes: "Always more where they came from", project_id: 1},
        {ToDo: "Give magic box to newly hired code monkeys", Notes: "Don't tell about fate of last code monkeys unless required", project_id: 1},
        {ToDo: "Retire", Notes: "Send note from tropical island to code monkeys informing them their services are no longer required", project_id: 2},
        {ToDo: "Count paper stacks", Notes: "Use as fan if required, recommend strawberry daquiri as well", project_id: 2},
        {ToDo: "Hunt code monkeys for sport on private island", Notes: "Give 10 min head start, they're pretty frail after all", project_id: 2}
      ]);
    });
};
