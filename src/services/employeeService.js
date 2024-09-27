import { users } from "../data/users.js"
import DataError from "../models/dataError.js"

export default class EmployeeService{



    constructor(loggerService) {
        this.employees = []
        this.customers = []
        this.errors = []
        this.loggerService = loggerService
    }

    load() {
        for (const user of users) {
            switch (user.type) {
            case "employee":
                if (!this.checkEmployeeValidityForErrors(user)) {
                    this.employees.push(user)
                }
                break;

            default:
                this.errors.push(new DataError("Wrong user type!", user))
                break;
        }
    }
}



checkEmployeeValidityForErrors(user) {

    let requiredFields = "id firstName lastName city age SSN".split(" ")
    let hasErrors = false;

    for (const field of requiredFields) {
        hasErrors = true
        if (!user[field]) {
            this.errors.push(new DataError(`Validation problem. ${field} is required!`, user))
        }
    }


    if (Number.isNaN(Number.parseInt(+user.age))) {
        hasErrors = true
        this.errors.push(new DataError(`Validation problem. ${user.age} is not an age!`, user))

    }


   



    
}

listEmployees(user) {

    return this.employees

}


getEmployeeById(id) {

    return this.employees.find(u => u.id === id)
}



getEmployeesSorted() {
    return  this.employees.sort((employee1, employee2) => {
            if (employee1.firstName < employee2.firstName) {
                return -1;
            } else if (employee1.firstName === employee2.firstName) {
                return 0;
            } else {
                return 1;
            }
        })
    }
}

