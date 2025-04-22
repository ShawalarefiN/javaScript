let numbers = [1, 2, 3, 4, 5];
let sq = []
for( let i = 0; i < numbers.length; i++){
    let square = Math.pow(numbers[i],2)
    sq.push(square)
}
console.log(sq)
