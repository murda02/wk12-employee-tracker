class Employee {
    constructor(first_name, last_name, empl_role_id, manager_id) {
        this.first_name = first_name
        this.last_name = last_name
        this.empl_role_id = empl_role_id
        this.manager_id = manager_id
    }

    viewEmpls() {
        //sql query to get all the employees
        //formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
        console.log('Here are all the emplyeez!!');
    }

    addEmpl() {
        //sql query to add employee to the db
        //prompt user to enter the employee’s first name, last name, role, and manager, and add employee to the database
        console.log('Employee added!');
    }

    updateEmplRole() {
        //sql query to update an employee's role
        //prompt user to select an employee to update and their new role and this information is updated in the database 
        console.log('Employee role has been updated!');
    }
}

module.exports = Employee