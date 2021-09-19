INSERT INTO department (dept_name)
VALUES  ('Executives'),
        ('Marketing'),
        ('Engineering'),
        ('Sales'),
        ('Product');

INSERT INTO empl_role (title, salary, department_id)
VALUES ('CEO', 300000, 1),
        ('CTO', 200000, 1),
        ('VP of Marketing', 130000, 2),
        ('VP of Software', 180000, 3),
        ('Developer', 110000, 3),
        ('QA Engineer', 80000, 3),
        ('VP of Sales', 190000, 4)
        ('Sales Rep', 110000, 4)
        ('Product Manager', 120000, 5);

INSERT INTO employee (first_name, last_name, empl_role_id, manager_id)
VALUES ('Mario', 'Brothers', 1, NULL),
        ('Luigi', 'Brothers', 2, 1),
        ('Princess', 'Peach', 3, 1),
        ('Bowser', 'King of the Koopas', 4, 2),
        ('Wario', 'Brothers', 5, 4),
        ('Toad', 'Kinopio', 6, 4),
        ('Donkey', 'Kong', 7, 1),
        ('Princess', 'Daisy', 8, 7),
        ('King', 'Boo', 9, 4);
