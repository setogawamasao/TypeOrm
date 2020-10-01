# db 起動

docker-compose up -d

# postgres 接続

docker exec -it typeOrmQuickStart bash

psql -h localhost -p 5432 -U postgres -d postgres

# 実行方法

npm run start

# 参考

TypeOrm relation  
https://typeorm.delightful.studio/interfaces/_decorator_options_relationoptions_.relationoptions.html

https://github.com/typeorm/typeorm/blob/master/docs/relations.md
