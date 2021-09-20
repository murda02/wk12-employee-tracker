class EmplRole {
    constructor(title, salary, department_id) {
        this.title = title
        this.salary = salary
        this.department_id = department_id
    }

    viewRoles() {
        //sql query to get all the roles!
        //display job title, role id, the department that role belongs to, and the salary for that role
        console.log('Here are all the roles!');
    }

    addRole() {
        //sql query to add a role
        //prompt user to enter the name, salary, and department for the role and add role to the database
        console.log('Role added!');
    }
}

module.exports = EmplRole