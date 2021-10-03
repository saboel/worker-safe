"use strict";

exports.up = function(knex) {
  return knex.schema.createTable("employee", table => {
		table.increments();
		table.string("first_name").notNullable();
		table.string("last_name").notNullable();
		table.string("email").notNullable();
		table.timestamps(true, true);
	})

  .createTable("questions", table => {
    table.increments();
    table.text("description");
    table.timestamps(true, true);
  })

  .createTable("employee_checkin", table => {
    table.increments();
    table.text("answer");
    table.integer("employee_id")
         .unsigned()
         .references("id")
         .inTable("employee")
         .onDelete("CASCADE")
         .onUpdate("CASCADE");
    table.integer("question_id")
         .unsigned()
         .references("id")
         .inTable("questions")
         .onUpdate("CASCADE")
         .onDelete("CASCADE")
         .notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("employee")
                      .dropTableIfExists("questions")
                      .dropTableIfExists("employee-checkin");
};
