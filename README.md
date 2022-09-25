# Codimite-Task-1
## TODO Application

## Install npm & docker

###  mysql database running on a container

docker run --name mysql -p 127.0.0.1:3306:3306 -e MYSQL_ROOT_PASSWORD=123 -d mariadb:latest

### Go inside the container and login to mysql

mysql -u root -p

CREATE DATABASE TODO;

use TODO;

CREATE TABLE todo ( name VARCHAR(20), Description VARCHAR(40), status VARCHAR(20) );

### Exit Container and go to the project directory

npm install

npm start

