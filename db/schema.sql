DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;

USE employee_db;

CREATE TABLE department (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  dept_name VARCHAR(100) NOT NULL
);

CREATE TABLE empl_role (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30),
    salary DECIMAL NOT NULL,
    -- FOREIGN KEY (department_id) REFERENCES department(id) ON DELETE SET NULL
    department_id FOREIGN KEY REFERENCES department(id) ON DELETE SET NULL
);

CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    empl_role_id FOREIGN KEY REFERENCES empl_role(id) ON DELETE SET NULL,
    -- not sure how to make manager_id conditional (i.e if employee has none)
    -- this is a start...
    manager_id FOREIGN KEY REFERENCES employee(id) ON DELETE SET NULL
);
