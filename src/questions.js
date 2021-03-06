const fs = require('fs');
const inquirer = require('inquirer');

let team = [];
// questions for user
const questions = [

    {
        type: 'list',
        name: 'role',
        message: "What role will this employee have?",
        choices: ['Manager', 'Engineer', 'Intern']
    },

    {
        type: 'input',
        name: 'name',
        message: "What is the employee's name?"
    },

    {
        type: 'input',
        name: 'id',
        message: "What is the employee's id?"

    },

    {
        type: 'input',
        name: 'email',
        message: "What is the employee's email?",

        // Got this from https://gist.github.com/Amitabh-K/ae073eea3d5207efaddffde19b1618e8 had to adjust to work for assignment

        validate: function (email) {

            valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)

            if (!valid) {
                console.log("Please enter a valid email");
                return false;
            }
            return true;
        }
    },

    // Manager question

    {
        type: 'input',
        name: 'office',
        message: "Please enter the manager's office number: ",
        validate: (office => (office ? true : console.log("Please enter the manager's office number"))),
        when: ({ role }) => (role === 'Manager' ? true : false)
    },

    // Engineer question
    {
        type: 'input',
        name: 'github',
        message: "Please enter this employees GitHub username: ",
        validate: (github => (github ? true : console.log("Please enter the engineer's username"))),
        when: ({ role }) => (role === 'Engineer' ? true : false)
    },
    // Intern question
    {
        type: 'input',
        name: 'school',
        message: "Please enter the name of this intern's school: ",
        validate: (school => (school ? true : console.log("Please enter the intern's school name"))),
        when: ({ role }) => (role === 'Intern' ? true : false)
    },

    // repeat questions if needed
    {
        type: 'confirm',
        name: 'continue',
        message: "Do you wish to add more employees?",
        default: false
    }
];


module.exports = questions;

