CREATE DATABASE overview;

USE overview;

CREATE TABLE games (
  id int NOT NULL AUTO_INCREMENT,
  platforms VARCHAR(90),
  os VARCHAR(90),
  developer VARCHAR(16),
  publisher VARCHAR(20),
  links VARCHAR(40),
  rating int,
  PRIMARY KEY (ID)
);