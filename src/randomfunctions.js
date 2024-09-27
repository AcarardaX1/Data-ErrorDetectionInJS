function addToCart(quantity, productName = "Apple" ){

    console.log("Added to Basket: " + productName + " Amount : " + quantity)

}

addToCart("Egg", 10)
addToCart("Watermelon" , 5)
addToCart(10)

function addToCart2(productName, quantity, unitPrice){}

addToCart2("Apple", 5, 10)
addToCart2("Peach", 15, 20)
addToCart2("Pear", 10, 15)

let product1 = {productName: "Banana", unitPrice:10, quantity:5}


function addToCart3(product){
    console.log("Product:" + product.productName)
    console.log("Cost:" + product.unitPrice)
    console.log("Amount:" + product.quantity)}


addToCart3(product1)

let product2 = {productName: "Mango", unitPrice:10, quantity:5}
let product3 = {productName: "Grape", unitPrice:10, quantity:5}
product2 = product3 
product2.productName = "Melon"
console.log(product3.productName)


function addToCart4(products){
    console.log(products)
}

let products = [

    {productName: "Apple", unitPrice:10, quantity:5},
    {productName: "Pear", unitPrice:10, quantity:5},
    {productName: "Melon", unitPrice:10, quantity:5}
    
]

addToCart4(products)


function add(...numbers){ //rest operator, If there are 3 dots in front of the function

    let total = 0;
    for(let i =0; i<numbers.length; i++){
        total = total + numbers[i]
    }

    console.log(total)
} 


add(20,30)
add(20,30,40)
add(20,30,40,50)

let numbersx = [30,10,500,600,120]
console.log(Math.max(...numbersx)) //Spread, allows us to expand elements of an iterable (like an array or string) or object properties into places where multiple elements or properties are expected



let [bayern, piemonte, ara, [[bayernstadt], [cittapiemonte], [villesara]]] = [
    {name : "Bayern", population: 13}, 
    {name : "Piemonte", population: 5}, 
    {name: "Auvergne-Rhone Alpes", population: 8},
    [
            ["Munchen", "Nurnberg"],    
            ["Torino", "Vercelli"],
            ["Lyon", "Montlucon"]

    ]
];

console.log(bayern.name)
console.log(bayern)
console.log(piemonte)
console.log(piemonte.population)            //Destruction, copying the values of an array or the properties of an object to a variable
console.log(bayernstadt)
console.log(cittapiemonte)
console.log(villesara)




let newproductName, newunitPrice, newquantity
({productName:newproductName, unitPrice:newunitPrice, quantity:newquantity} 
= {productName: "Elma", unitPrice:10, quantity:5})

console.log(newproductName)
console.log(newunitPrice)
console.log(newquantity)


// login({title}){

//     console.log("<h1>"+title+"</h1>")  Written as Extra to make practice log implementation  

// }

