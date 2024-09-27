import { users } from "../data/users.js"
import DataError from "../models/dataError.js"

export default class CustomerService{


    constructor(loggerService) {
        this.employees = []
        this.customers = []
        this.errors = []
        this.loggerService = loggerService
    }




    load() {
        for (const user of users) {
            switch (user.type) {
                case "customer":
                    if (!this.DetectCustomerError(user)) {
                        this.customers.push(user)
                    }
                    break;
                    
                    default:
                        this.errors.push(new DataError("Wrong user type!", user))
                        break;
                }
            }
        }



        DetectCustomerError(user) {

            let requiredFields = "id firstName lastName city age".split(" ")
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
            return hasErrors;
        }


        listCustomers(user) {

            return this.customers
    
        }



        getCustomerById(id) {

            return this.customers.find(u => u.id === id)
        }


        getCustomersSorted() {
            return this.customers.sort((customer1, customer2) => {
                  if (customer1.firstName < customer2.firstName) {
                      return -1;
                  } else if (customer1.firstName === customer2.firstName) {
                      return 0;
                  } else {
                      return 1;
                  }
              })
          }


}

