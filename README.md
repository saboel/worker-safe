# Worker Safe

## Setup database
After installing all dependencies `npm install`, do the following to get the sqlite database running:
- Create a database.sqlite in the database folder
- Run `npx knex migrate:latest`
- Then `npx knex seed:run`

Note, the database foler includes a .gitignore file, do not delete this as it makes sure your own local copy of the sqlite database does not get copied to the repo.