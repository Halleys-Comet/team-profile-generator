const inquirer = require('inquirer');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager')
const questions = require('./src/questions')


const promptUser = () => {    
    console.log(`
========================
Add Employee Information
========================
`)

return inquirer
    .prompt(questions);

}

promptUser();