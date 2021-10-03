
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('employee_checkin').del()
    .then(function () {
      // Inserts seed entries
      return knex('employee_checkin').insert([
        {
          answer: "yes",
          employee_id: 1
        },
        {
          answer: "no",
          employee_id: 2
        },
        {
          answer: "yes",
          employee_id: 3
        },
        {
          answer: "no",
          employee_id: 4
        },
        {
          answer: "yes",
          employee_id: 5
        },
        {
          answer: "no",
          employee_id: 6
        },
        {
          answer: "yes",
          employee_id: 7
        }
      ]);
    });
};
