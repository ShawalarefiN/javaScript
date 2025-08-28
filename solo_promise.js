function asyncFunc(work){
    return new Promise((resolve, reject) => {
        if (work === "") reject(Error("nothing"));
        setTimeout(() => {resolve(work)}, 1000)
    });
}
asyncFunc("work 1")
.then((result) => {console.log(result);
    return asyncFunc("work 2");
}, (error) => {console.log(error)})
.then ((result) => {console.log(result);}, 
(error) => {console.log(error);}
)
