//TIP With Search Everywhere, you can find any action, file, or symbol in your project. Press <shortcut actionId="Shift"/> <shortcut actionId="Shift"/>, type in <b>terminal</b>, and press <shortcut actionId="EditorEnter"/>. Then run <shortcut raw="npm run dev"/> in the terminal and click the link in its output to open the app in the browser.

console.log("Hello World!")

let DollarYesterday = 1.15;
//DollarYesterday optional to edit 
let DollarToday = 1.1;
console.log(DollarYesterday);

const euroToday = 1.02
const euroYesterday= 1.05;

console.log(euroToday);


//array
//camelCasing
//PascalCasing
let HouseLoan = ["HouseCredit", "realEstateCredit", "Public Servant House Credit", "Private Credit"];

console.log("<ul>")
for(let i = 0; i<HouseLoan.length;i++) {
  console.log("<li>"+HouseLoan[i]+"</li>");
}
console.log("</ul>");

