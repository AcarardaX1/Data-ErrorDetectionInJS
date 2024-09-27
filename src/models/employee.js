import User from "./user.js"

 
export default class Employee extends User{


    constructor(id, firstName, lastName, city, age, SSN) {

        //console.log("user created") - optional

        super(id, firstName, lastName, city, age, SSN)         
        this.remoteOption = this.remoteOption

    }



    



}