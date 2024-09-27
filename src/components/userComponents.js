import { BaseLogger, ElasticBaseLogger, MongoLogger } from "../crossCuttingConcerns/logging/logger.js"
import Customer from "../models/customer.js"
import Employee from "../models/employee.js"
import User from "../models/user.js"
import UserService from "../services/userService.js"

console.log("User component loaded")


let logger1 = new MongoLogger()
let userService = new UserService(logger1)


let user1 = new User(1, "Arda", "Acar", "Milan")
let user2 = new User(2, "Jack", "Smithson", "Seattle")



userService.add(user1)
userService.add(user2)



let customer = {id:1, firstName: "Arda"}

customer.lastName = "Acar" //prototyping, Another value can also be added like this way


console.log(customer.firstName +" "+ customer.lastName)


console.log(customer.lastName)

console.log("-----------------")

userService.load()
console.log(userService.customers)
console.log(userService.employees)
console.log(userService.errors)

console.log("-----------------")

userService.load()

let customerToAdd = new Customer(9, "Clark", "Newtown", "New York", 36, 1010)//type missed
customerToAdd.type = "customer"

userService.add(customerToAdd) 


let employeeToAdd = new Employee(10, "Salvatore", "Rossotoro", "Madrid", 32, 1234)//type missed
employeeToAdd.type = "employee"

userService.add(employeeToAdd) 
console.log(userService.getCustomersSorted())
 





