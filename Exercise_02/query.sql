CREATE DATABASE QA_ASSESSMENT;
USE QA_ASSESSMENT;

CREATE TABLE sellers (
    id int NOT NULL,
    name varchar(30) NOT NULL,
    rating TINYINT,
    PRIMARY KEY (id)
);

INSERT INTO sellers VALUES(10,'apple',3);
INSERT INTO sellers VALUES(11,'Asus',2);
INSERT INTO sellers VALUES(12,'Lenovo',2);
INSERT INTO sellers VALUES(13,'Fujitso',3);
INSERT INTO sellers VALUES(14,'Microsoft',3);
INSERT INTO sellers VALUES(15,'Penny',4);


CREATE TABLE items (
    id int NOT NULL,
    name varchar(30) NOT NULL,
    sellerId INT,
    PRIMARY KEY (id),
    FOREIGN KEY (sellerId) REFERENCES sellers(id)
);

INSERT INTO items VALUES(1,'mouse',10);
INSERT INTO items VALUES(2,'monitor',11);
INSERT INTO items VALUES(3,'case',12);
INSERT INTO items VALUES(4,'lobtop',13);
INSERT INTO items VALUES(5,'surface',14);
INSERT INTO items VALUES(6,'Notebook',15);
INSERT INTO items VALUES(7,'Pencil',15);

SELECT sellers.name as seller,items.name as item
FROM sellers
INNER JOIN items
ON sellers.id = items.sellerId WHERE rating>=4;





