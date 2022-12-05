# DATABASE
 CREATE DATABASE quotes CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

# USER denoDev
 GRANT ALL PRIVILEGES ON quotes.* TO denoDev@'%' IDENTIFIED BY 'mariadb';

# TABLA quote
CREATE TABLE quote(
	id INT AUTO_INCREMENT
	,quote VARCHAR(255) NOT NULL
	,author VARCHAR(155) NOT NULL
	,CONSTRAINT pkquote PRIMARY KEY (id)
);

# TABLE user
CREATE TABLE user(
	id INT AUTO_INCREMENT
	,account VARCHAR(200) NOT NULL
	,password VARCHAR(128) NOT NULL
	,CONSTRAINT pkuser PRIMARY KEY (id)
);


//INSERT INTO user (account, password) VALUES ('deno',sha2('deno', 512));

INSERT INTO user (account, password) VALUES ('asyncr', 'asyncr');

UPDATE user SET password = sha2('asyncr', 512) WHERE id = 1;
