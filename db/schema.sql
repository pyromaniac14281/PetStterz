### Schema

DROP DATABASE IF EXISTS petstterz_db;

CREATE DATABASE petstterz_db;
USE petstterz_db;

CREATE TABLE users(

  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  zip_code INT(5),
  email_address VARCHAR(50) NOT NULL,
  password VARCHAR(50) NOT NULL,
  provider BOOLEAN DEFAULT false,
  PRIMARY KEY (id)

);