let cart = [

{id:1, productName :"Cellulare", quantity:3, unitPrice: 750},
{id:2, productName :"Computer", quantity:6, unitPrice: 950},
{id:3, productName :"Coffe Machine", quantity:2, unitPrice: 250}
]

let total = cart.reduce((acc, product)=> acc + product.unitPrice, 0) //acc => accumulator 
let total1 = cart.reduce((acc, product)=> acc + product.unitPrice*product.quantity, 0)
console.log(total)
console.log(total1)


reftest(cart)

console.log(cart)


console.log("<ul>")
cart.map(product=>{  //Front End'de HTTPS araciligiyla liste olusturur 

    console.log("<li>"+product.productName + " : "+ product.unitPrice*product.quantity + "</li>")
})
console.log("</ul>")



//SPA Single Page Application

//cart.push({id:7, productName :"Headphone", quantity:9, unitPrice: "50"})

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