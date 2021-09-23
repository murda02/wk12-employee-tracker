DROP DATABASE IF EXISTS corp_db;
CREATE DATABASE corp_db;

USE corp_db;

CREATE TABLE departments (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  dept_name VARCHAR(30) NOT NULL
  );

CREATE TABLE empl_roles (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INT,
    FOREIGN KEY (department_id) 
    REFERENCES departments(id) 
    ON DELETE CASCADE
    );

CREATE TABLE employees (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    empl_role_id INT,
    manager_id INT,
    FOREIGN KEY (empl_role_id)
    REFERENCES empl_roles(id)
    ON DELETE CASCADE,
    FOREIGN KEY (manager_id)
    REFERENCES employees (id)
    ON DELETE CASCADE
    );
