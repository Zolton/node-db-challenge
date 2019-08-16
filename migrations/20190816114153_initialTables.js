exports.up = function(knex) {
  return knex.schema
    .createTable("projects", tbl => {
      tbl.increments();
      tbl.string("projectName", 128).notNullable();
      tbl.string("projectDescription", 128);
      tbl
        .boolean("Completed")
        .notNullable()
        .defaultTo(false);
    })
    .createTable("resources", tbl => {
      tbl.increments();
      tbl.string("resourceName", 128).notNullable();
      tbl.string("description", 128);
    })
    .createTable("task", tbl => {
      tbl.increments();
      tbl.string("ToDo", 128).notNullable();
      tbl.string("Notes", 128);
      tbl
        .boolean("Completed")
        .notNullable()
        .defaultTo(false);
    })
    .createTable("quantity", tbl => {
      tbl.increments();
      tbl.string("quantity", 128);
      tbl
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("projects")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      tbl
        .integer("resource_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("resources")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("quantity")
    .dropTableIfExists("task")
    .dropTableIfExists("resources")
    .dropTableIfExists("projects");
};
