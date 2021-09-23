# Employee Tracker

## Table of Contents

* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Questions](#question)

## Description

This is a command-line application that manages a company's employee database, using Node.js, Inquirer, and MySQL.

## Installation

Creat a new directory and execute the following command: 
```
git@github.com:murda02/wk12-employee-tracker.git
```

After the repo is cloned you will need to install the dependencies, execute this command from the command-line in the root directory:
```
npm i
```

In order to use this app, you need MySQL installed on your local. 
1. Install MySQL. See installation guide [here](https://dev.mysql.com/doc/mysql-installation-excerpt/5.7/en/). 
2. Change the mysql database password in the `index.js` file to the root password you just setup in step 1.
3. Once MySQL is install, enter mysql from the root directory with this command: `mysql -u root -p`. 
4. Next create the database: `CREATE DATABASE corp_db;` 
5. Select the database `use copr_db;`
6. Next run the schema on the database: `SOURCE db/schema.sql`
7. Then seed the db: `SOURCE db/schema.sql`

## Usage

See instructional video [here](https://drive.google.com/file/d/1zuPx5vreJp1cAejG7yAHCyfwqHPmV2FP/view?usp=sharing)

## License

MIT

## Questions
Contact me at:
* [GitHub](https://github.com/murda02)
* [Email](mailto:davelmurphy@zoho.com)