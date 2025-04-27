var choose = `1. C -> F \n2. C -> K \n3. F -> C \n4. F -> K \n5. K -> F \n6. K -> C \n`;
var amount;
console.log(choose)
var input = prompt("you choose: ");
console.log(input);
if(input == "1"){
  amount = Number(prompt("Enter Celcius: "))
  console.log(amount)
  var ans = (amount * 9/5) + 32;
  console.log(ans);
} else if(input == "2"){
  amount = Number(prompt("Enter Celcius: "))
  console.log(amount)
  var ans = (amount + 273.15);
  console.log(ans);
} else if(input == "3"){
  amount = Number(prompt("Enter Ferenheit: "))
  console.log(amount)
  var ans = (amount - 32) * 5/9;
  console.log(ans);
} else if(input == "4"){
  amount = Number(prompt("Enter Ferenheit: "))
  console.log(amount)
  var ans = (amount - 32) * 5/9 + 273.15;
  console.log(ans);
} else if(input == "5"){
  amount = Number(prompt("Enter Kelvin: "))
  console.log(amount)
  var ans = (amount - 273.15) * 9/5 + 32;
  console.log(ans);
} else if(input == "6"){
  amount = Number(prompt("Enter Kelvin: "))
  console.log(amount)
  var ans = (amount - 273.15);
  console.log(ans);
} else {console.log("N/A")}
