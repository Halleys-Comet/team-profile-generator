const Employee = require('./Employee')

class Manager extends Employee {
    constructor (role, name, id, email, officeNumber){
    super(role, name, id, email)

    this.officeNumber = officeNumber

    }

getOfficeNumber() {
    return this.officenumber
};

getRole() {
    return 'Manager'
}

};


module.exports = Manager;
