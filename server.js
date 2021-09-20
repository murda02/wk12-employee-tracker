const inquirer = require('inquirer')
const mysql2 = require('mysql2')
const consoleTable = require('console.table')
const Department = require('./lib/Department')
const EmplRole = require('./lib/EmplRole')
const Employee = require('./lib/Employee')
var output = [];

const department = new Department()
const empl_role = new EmplRole()
const employee = new Employee()

const startPrompt = () => {

console.log(`   

███████╗███╗   ███╗██████╗ ██╗      ██████╗ ██╗   ██╗███████╗███████╗
██╔════╝████╗ ████║██╔══██╗██║     ██╔═══██╗╚██╗ ██╔╝██╔════╝██╔════╝
█████╗  ██╔████╔██║██████╔╝██║     ██║   ██║ ╚████╔╝ █████╗  █████╗  
██╔══╝  ██║╚██╔╝██║██╔═══╝ ██║     ██║   ██║  ╚██╔╝  ██╔══╝  ██╔══╝  
███████╗██║ ╚═╝ ██║██║     ███████╗╚██████╔╝   ██║   ███████╗███████╗
╚══════╝╚═╝     ╚═╝╚═╝     ╚══════╝ ╚═════╝    ╚═╝   ╚══════╝╚══════╝
                                                                     
███╗   ███╗ █████╗ ███╗   ██╗ █████╗  ██████╗ ███████╗██████╗        
████╗ ████║██╔══██╗████╗  ██║██╔══██╗██╔════╝ ██╔════╝██╔══██╗       
██╔████╔██║███████║██╔██╗ ██║███████║██║  ███╗█████╗  ██████╔╝       
██║╚██╔╝██║██╔══██║██║╚██╗██║██╔══██║██║   ██║██╔══╝  ██╔══██╗       
██║ ╚═╝ ██║██║  ██║██║ ╚████║██║  ██║╚██████╔╝███████╗██║  ██║       
╚═╝     ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝╚═╝  ╚═╝ ╚═════╝ ╚══════╝╚═╝  ╚═╝       
                                                                                       
`)

    inquirer
        .prompt([
            {
                type: 'list',
                name: 'usersChoice',
                message: 'What do you want to do?',
                choices: ['View departments', 'View roles', 'View employees', 'Add department', 'Add role', 'Add employee', 'Update employee role'],
                validate: (value) => { if (value) { return true } else { return 'Please select an option.' } }
            },
        ]).then(response => {
            switch (response.usersChoice) {
                case ('View departments'):
                    department.viewDepts()
                    break
                case ('View roles'):
                    empl_role.viewRoles()
                    break
                case ('View employees'):
                    employee.viewEmpls()
                    break
                case ('Add department'):
                    department.addDept()
                    break
                case ('Add role'):
                    empl_role.addRole()
                    break
                case ('Add employee'):
                    employee.addEmpl()
                    break
                case ('Update employee role'):
                    employee.updateEmplRole()
                    break
            }
        })
}

startPrompt()