class Department {
    constructor(dept_name) {
        this.dept_name = dept_name
    }

    viewDepts() {
        //sql query that retuns all departments
        //formatted table showing department names and department ids
        console.log('Here is all the depts!');
    }

    addDept() {
        //sql query that adds a dept
        //prompt user to enter the name of the department, then add department to the database
        console.log('Deptartment added!');
    }
}

module.exports = Department