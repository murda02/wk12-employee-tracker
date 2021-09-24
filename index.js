// Import and require npm packages
const inquirer = require('inquirer')
const mysql2 = require('mysql2')

const db = mysql2.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '<enter your password here!>',
        database: 'corp_db'
    },
    console.log(`Connected to the corp_db database.`)
);

db.connect((err) => {
    if (err) throw err
    // console.log(`\n`);
    // console.log("connected to thread: " + db.threadId)
})
const startPrompt = () => {

    console.log(`   


    ███████╗███╗   ███╗██████╗ ██╗      ██████╗ ██╗   ██╗███████╗███████╗
    ██╔════╝████╗ ████║██╔══██╗██║     ██╔═══██╗╚██╗ ██╔╝██╔════╝██╔════╝
    █████╗  ██╔████╔██║██████╔╝██║     ██║   ██║ ╚████╔╝ █████╗  █████╗  
    ██╔══╝  ██║╚██╔╝██║██╔═══╝ ██║     ██║   ██║  ╚██╔╝  ██╔══╝  ██╔══╝  
    ███████╗██║ ╚═╝ ██║██║     ███████╗╚██████╔╝   ██║   ███████╗███████╗
    ╚══════╝╚═╝     ╚═╝╚═╝     ╚══════╝ ╚═════╝    ╚═╝   ╚══════╝╚══════╝
                                                                         
    ████████╗██████╗  █████╗  ██████╗██╗  ██╗███████╗██████╗             
    ╚══██╔══╝██╔══██╗██╔══██╗██╔════╝██║ ██╔╝██╔════╝██╔══██╗            
       ██║   ██████╔╝███████║██║     █████╔╝ █████╗  ██████╔╝            
       ██║   ██╔══██╗██╔══██║██║     ██╔═██╗ ██╔══╝  ██╔══██╗            
       ██║   ██║  ██║██║  ██║╚██████╗██║  ██╗███████╗██║  ██║            
       ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝            
                                                                         
                                                                                       
`)

    inquirer
        .prompt([
            {
                type: 'list',
                name: 'usersChoice',
                message: `? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ?\n
            What do you want to do?\n
? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ?`,
                choices: ['View departments', 'View roles', 'View employees', 'Add department', 'Add role', 'Add employee', 'Update employee role', 'Exit']
            },
        ]).then(response => {
            switch (response.usersChoice) {
                case ('View departments'):
                    viewAllDepts()
                    break
                case ('View roles'):
                    viewAllRoles()
                    break
                case ('View employees'):
                    viewAllEmployees()
                    break
                case ('Add department'):
                    inquirer
                        .prompt([
                            {
                                type: 'text',
                                name: 'dept_name',
                                message: 'What is the name of the department you would like to add?',
                                validate: (value) => { if (value) { return true } else { return 'Please enter the department name.' } }
                            },
                        ]).then(deptRes => {
                            console.log(deptRes)
                            db.query('INSERT INTO corp_db.departments SET ?', deptRes, function (err, res) {
                                if (err) throw err
                                //view all dept function called so user can see their update
                                viewAllDepts()
                            })
                        })
                    break
                case ('Add role'):
                    inquirer
                        .prompt([
                            {
                                type: 'text',
                                name: 'title',
                                message: 'What is the name of the role you would like to add?',
                                validate: (value) => { if (value) { return true } else { return 'Please enter the name of the role you want to add.' } }
                            },
                            {
                                type: 'text',
                                name: 'salary',
                                message: 'What is the salary of the role you are adding?',
                                validate: (value) => { if (value) { return true } else { return 'Please enter the salary of the role you want to add.' } }
                            },
                            {
                                type: 'text',
                                name: 'department_id',
                                message: 'What is the department ID of the role you are adding?',
                                validate: (value) => { if (value) { return true } else { return 'Please enter the department ID of the role you want to add.' } }
                            },
                        ]).then(newRoleRes => {
                            console.log(newRoleRes)
                            db.query('INSERT INTO corp_db.empl_roles SET ?', newRoleRes, function (err, res) {
                                if (err) throw err
                                //view all roles function called so user can see their update
                                viewAllRoles()
                            })
                        })
                    break
                case ('Add employee'):
                    inquirer
                        .prompt([
                            {
                                type: 'text',
                                name: 'first_name',
                                message: 'What is the first name of the employee you would like to add?',
                                validate: (value) => { if (value) { return true } else { return 'Please enter the first name of the employee you want to add.' } }
                            },
                            {
                                type: 'text',
                                name: 'last_name',
                                message: 'What is the last name of the employee you would like to add?',
                                validate: (value) => { if (value) { return true } else { return 'Please enter the last name of the employee you want to add.' } }
                            },
                            {
                                type: 'text',
                                name: 'empl_role_id',
                                message: 'What is the employee role ID of the employee you would like to add?',
                                validate: (value) => { if (value) { return true } else { return 'Please enter the employee role ID of the employee you want to add.' } }
                            },
                            {
                                type: 'text',
                                name: 'manager_id',
                                message: 'What is the manager ID of the employee you would like to add?',
                                validate: (value) => { if (value) { return true } else { return 'Please enter the manager ID of the employee you want to add.' } }
                            },
                        ]).then(newEmplRes => {
                            console.log(newEmplRes)
                            db.query('INSERT INTO corp_db.employees SET ?', newEmplRes, function (err, res) {
                                if (err) throw err
                                //view all roles function called so user can see their update
                                viewAllEmployees()
                            })
                        })
                    break
                case ('Update employee role'):
                    //  view all employee roles function called, so user can see all employee details
                    // viewAllRoles()

                    inquirer
                        .prompt([
                            {
                                type: 'text',
                                name: 'empl_role_id',
                                message: 'Whats the new employee role ID?',
                                validate: (value) => { if (value) { return true } else { return 'Please select an option.' } }
                            },
                            {
                                type: 'text',
                                name: 'id',
                                message: 'Whats the employees id?',
                                validate: (value) => { if (value) { return true } else { return 'Please select an option.' } }
                            }
                        ]).then(updateRes => {
                            db.query('UPDATE corp_db.employees SET empl_role_id=? WHERE id = ?', [updateRes.empl_role_id, updateRes.id], function (err, res) {
                                if (err) throw err
                                viewAllEmployees()
                            })
                        })
                    break
                case ('Exit'):
                    inquirer
                        .prompt([
                            {
                                type: 'list',
                                name: 'areYouDone',
                                message: `Are you sure you want to exit?`,
                                choices: ['Yes', 'No']
                            },
                        ]).then(userRes => {
                            if (userRes.areYouDone === 'Yes') {
                                console.log(`***************************************************************************\n
                Thanks for using my Employee Tracker app!!!\n
***************************************************************************`);
                                process.exit()
                            } else {
                                startPrompt()
                            }
                        })
                    break
            }
        })
}

function viewAllDepts () {
    db.query('SELECT * FROM corp_db.departments', function (err, res) {
        if (err) throw err
        console.log(`\n`)
        console.table(res)
        console.log('↓↓↓ press the down arrow to continue ↓↓↓')
    })

    startPrompt()
}

function viewAllRoles () {
    db.query('SELECT * FROM corp_db.empl_roles', function (err, res) {
        if (err) throw err
        console.log(`\n`)
        console.table(res)
        console.log('↓↓↓ press the down arrow to continue ↓↓↓')
    })

    startPrompt()
}

function viewAllEmployees () {
    db.query('SELECT * FROM corp_db.employees', function (err, res) {
        if (err) throw err
        console.log(`\n`)
        console.table(res)
        console.log('↓↓↓ press the down arrow to continue ↓↓↓')
    })

    startPrompt()
}

startPrompt()
