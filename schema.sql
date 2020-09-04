CREATE DATABASE overview;

USE overview;

CREATE TABLE games (
  id int NOT NULL AUTO_INCREMENT,
  product_id int NOT NULL,
  platforms VARCHAR(120),
  os VARCHAR(120),
  developer int NOT NULL,
  publisher int NOT NULL,
  sysReq VARCHAR(300),
  links VARCHAR(70),
  rating int NOT NULL, 
  FOREIGN KEY (developer) REFERENCES developers(id),
  FOREIGN KEY (publisher) REFERENCES publishers(id),
  PRIMARY KEY (ID)
);


CREATE TABLE developers (
  id int NOT NULL AUTO_INCREMENT,
  name VARCHAR(20) NOT NULL,
  PRIMARY KEY (ID)
);

CREATE TABLE publishers (
  id int NOT NULL AUTO_INCREMENT,
  name VARCHAR(30) NOT NULL,
  PRIMARY KEY (ID)
);

-- CREATE TABLE platforms (
--   id int NOT NULL AUTO_INCREMENT,
--   url VARCHAR(120) NOT NULL,
--   PRIMARY KEY (ID)
-- )

-- CREATE TABLE game_platform (
--   game_id int NOT NULL,
--   platform_id int NOT NULL,
--   FOREIGN KEY (game_id) REFERENCES games(id),
--   FOREIGN KEY (platform_id) REFERENCES platforms(id)
-- )