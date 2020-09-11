CREATE DATABASE overview;

USE overview;

CREATE TABLE games (
  id int NOT NULL AUTO_INCREMENT,
  platforms int,
  os int,
  developer VARCHAR(12),
  publisher VARCHAR(12),
  links VARCHAR(40),
  rating int,
  PRIMARY KEY (ID)
);