const Employee = require('./Employee')

class Engineer extends Employee {
    constructor (role ,name, id, email, github){
    super(role, name, id, email)

    this.github = github

    }

getGithub() {
    return 'github.com/' + this.github;
};

getRole() {
    return 'Engineer'
}

};


module.exports = Engineer;
