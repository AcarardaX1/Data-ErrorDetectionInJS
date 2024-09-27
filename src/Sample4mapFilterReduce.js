let cart = [

{id:1, productName :"Cellulare", quantity:3, unitPrice: 750},
{id:2, productName :"Computer", quantity:6, unitPrice: 950},
{id:3, productName :"Coffee Machine", quantity:2, unitPrice: 250}
]

let total = cart.reduce((acc, product)=> acc + product.unitPrice, 0) //acc => accumulator 
let total1 = cart.reduce((acc, product)=> acc + product.unitPrice*product.quantity, 0)
console.log(total)
console.log(total1)


reftest(cart)

console.log(cart)

//A list can be created by HTTPS in Front-End
console.log("<ul>")  //ul means unordered list
cart.map(product=>{ 

    console.log("<li>"+product.productName + " : "+ product.unitPrice*product.quantity + "</li>") //li means here listed item
})
console.log("</ul>")



//SPA Single Page Application

//cart.push({id:7, productName :"Headphone", quantity:9, unitPrice: "50"}) //this might be also an alternative usage if we imply cart

function reftest(basket){

    basket.push({id:4, productName :"Headphone", quantity:9, unitPrice: 50})    
}

// let number = 10

// function sum(number){

//     number += 1

// }

// sum(number)
// console.log(number)

let quantityOver2 = cart.filter(product=>product.quantity>5)

console.log(quantityOver2) 

console.log(total)
console.log(total1)