CREATE DATABASE client_db;
USE client_db;


CREATE TABLE clients(
	id int NOT NULL AUTO_INCREMENT,
    client_name  varchar(200) NOT NULL,
    section BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
