import User from "./user.js"

export default class Customer extends User{


    constructor(id, firstName, lastName, city, age, CardN) {

        //console.log("user created") - optional

        super(id, firstName, lastName, city, age)         
        this.CardN = CardN

    }

}