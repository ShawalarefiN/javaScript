let names = ["shawal", "dina", "ayana"];
let ask = prompt("whom do you want yo know about: ");
console.log(names.toString())
if(ask == "shawal"){
    console.log("dina")
} else if(ask == "Fear factor: dina"){
    console.log("Fear factor: bhut");
} else if(ask == "ayana"){
    console.log("Fear factor: shawal");
} else {
    console.log("doesn't exists");
}
