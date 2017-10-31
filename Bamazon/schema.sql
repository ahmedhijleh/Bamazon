DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;


CREATE TABLE products(
  item_id INT AUTO_INCREMENT NOT NULL,
  item_name VARCHAR(45) NOT NULL,
  department_name VARCHAR(45) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  stock_quantity INT(10) NOT NULL,
  primary key(item_id)
);



use bamazon;
INSERT INTO products (item_name, department_name, price, stock_quantity)
values("Uncharted 4","video games",49.95,150),
     ("ps4","gaming consoles",250.00,50),
       ("xbox","gaming consoles",250.00,50),
       ("Halo","video games",49.95,100),
       ("goodfellas","movies",40.00,8),
       ("Jeans","apperal",50.00,15),
       ("shirt","apperal",40.00,10),
       ("last of us","video games",45.00,60);
       
       
       