DROP DATABASE IF EXISTS petstterz_db;

CREATE DATABASE petstterz_db;
USE petstterz_db;

CREATE TABLE users
(

  id INT NOT NULL
  AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR
  (255),
  last_name VARCHAR
  (255)

  provider BOOLEAN DEFAULT false,
  
);