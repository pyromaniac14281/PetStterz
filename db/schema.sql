DROP DATABASE IF EXISTS petstterz_db;

CREATE DATABASE petstterz_db;
USE petstterz_db;

CREATE TABLE users(

  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  image VARCHAR(255),
  street_address VARCHAR(255) NOT NULL,
  zip_code INT(5) NOT NULL,
  email_address VARCHAR(50) NOT NULL,
  users_name VARCHAR(20) NOT NULL,
  password VARCHAR(50) NOT NULL,
  provider BOOLEAN DEFAULT false,
  PRIMARY KEY (id)

);