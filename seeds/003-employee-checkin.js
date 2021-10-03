
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('employee_checkin').del()
    .then(function () {
      // Inserts seed entries
      return knex('employee_checkin').insert([
        {
          answer: "yes",
          employee_id: 1,
          question_id: 1
        },
        {
          answer: "no",
          employee_id: 2,
          question_id: 1
        },
        {
          answer: "yes",
          employee_id: 3,
          question_id: 1
        },
        {
          answer: "no",
          employee_id: 4,
          question_id: 1
        },
        {
          answer: "yes",
          employee_id: 5,
          question_id: 1
        },
        {
          answer: "no",
          employee_id: 6,
          question_id: 1
        },
        {
          answer: "yes",
          employee_id: 7,
          question_id: 1
        }
      ]);
    });
};
