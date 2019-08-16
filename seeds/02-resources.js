
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {resourceName: "Jim", description: "Code monkey"},
        {resourceName: "Hammer", description: "Stop. Hammer Time"},
        {resourceName: "Computer", description: "Magic Box"},
        {resourceName: "Henry", description: "Code monkey"},
        {resourceName: "Office Space", description: "Ghetto Boys"},
        {resourceName: "Intellectual Property", description: "$$$"},
      ]);
    });
};
