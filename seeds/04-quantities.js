
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('quantity').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('quantity').insert([
        {quantity: "1", project_id: 1, resource_id: 1},
        {quantity: "3", project_id: 2, resource_id: 2},
        {quantity: "5", project_id: 1, resource_id: 3},
        {quantity: "1", project_id: 1, resource_id: 4},
        {quantity: "1", project_id: 1, resource_id: 5},
        {quantity: "Unlimited", project_id: 2, resource_id: 6},
      ]);
    });
};
