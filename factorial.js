function fact(n){
    if(n < 0){return "not neg numbers"}
    else if(n == 0){return 1}
    else {
        let sum = 1;
        for(let i = 1; i <= n; i++){
            sum *= i;
        } return sum;
    } 
}console.log(fact(5))
