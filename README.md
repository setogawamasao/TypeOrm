# Awesome Project Build with TypeORM

Steps to run this project:

1. Run `npm i` command
2. Setup database settings inside `ormconfig.json` file
3. Run `npm start` command

# postgres 接続

docker exec -it typeOrmQuickStart bash

psql -h localhost -p 5432 -U postgres -d postgres
