function generateRandomnumber() {
  return Math.floor(Math.random() * 100) + 1; // 100 is the last number || it will chose from 1 to 100
}
console.log(`your random number is: ${generateRandomnumber()}`);
