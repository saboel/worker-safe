exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('employee').del()
    .then(function () {
      // Inserts seed entries
      return knex('employee').insert([
        {
          first_name: 'John',
          last_name: 'Snow',
          email: 'j.snow@got.com'
        },
        {
          first_name: 'Thomas',
          last_name: 'Shelby',
          email: 't.shelby@shelbycompanyltd.com'
        }, 
        {
          first_name: 'Arthur',
          last_name: 'Shelby',
          email: 'a.shelby@shelbycompanyltd.com'
        }, {
          first_name: 'Ada',
          last_name: 'Shelby',
          email: 'a.shelby@shelbycompanyltd.com'
        }, {
          first_name: 'Polly',
          last_name: 'Gray',
          email: 'p.gray@shelbycompanyltd.com'
        },  {
         first_name: 'Micheal',
          last_name: 'Gray',
          email: 'm.gray@shelbycompanyltd.com'
        },{
          first_name: 'Alfie',
          last_name: 'Solomons',
          email: 'ta.solomons@shelbycompanyltd.com'
        },
      ]);
    });
};
