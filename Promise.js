let p = new Promise((resolve,reject) => {
    let a = 3;
    if (a == 2){
        resolve("Matched");
    } else {
        reject("Error");
    }
})
p.then((message) => {
    console.log("The math " + message);
}).catch((message) => {
    console.log("The math " + message)
})
