function addToCart(quantity, productName = "Elma" ){

    console.log("Sepete eklendi : " + productName + " adet : " + quantity)

}

addToCart("Yumurta", 10)
addToCart("Karpuz" , 5)
addToCart(10)


let sayHello = () =>{
    console.log("Hello World")
}

let sayHello2= () =>{
    console.log("Hello World")
}


sayHello();
sayHello2();


function addToCart2(productName, quantity, unitPrice){}

addToCart2("Elma", 5, 10)
addToCart2("Armut", 15, 20)
addToCart2("Elma", 10, 15)

let product1 = {productName: "Elma", unitPrice:10, quantity:5}


function addToCart3(product){
    console.log("Product:" + product.productName)
    console.log("Cost:" + product.unitPrice)
    console.log("Amount:" + product.quantity)}


addToCart3(product1)

let product2 = {productName: "Elma", unitPrice:10, quantity:5}
let product3 = {productName: "Elma", unitPrice:10, quantity:5}
product2 = product3 
product2.productName = "Karpuz"
console.log(product3.productName)


let sayi1 = 10
let sayi2 = 20
sayi1 = sayi2
sayi2 = 100
console.log(sayi1)


function addToCart4(products){
    console.log(products)
}

let products = [

    {productName: "Elma", unitPrice:10, quantity:5},
    {productName: "Armut", unitPrice:10, quantity:5},
    {productName: "Karpuz", unitPrice:10, quantity:5}
    
]

addToCart4(products)


function add(...numbers){ //rest operator, bir fonksiyounun onunde uc nokta varsa

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
console.log(Math.max(...numbersx)) //spread



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
console.log(piemonte.population)            //destruction
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

//     console.log("<h1>"+title+"</h1>")

// }

