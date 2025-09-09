function Book(title, author, year){
    this.title = title;
    this.author = author;
    this.year = year;
}
Book.prototype.getSummary= function (){
    return `${this.title} was written by ${this.author} in ${this.year}`
}
// magazine constructor
function Magazine(title, author, year, month){
    Book.call(this, title, author, year);
    this.month = month;
}
// Inherit prototype
Magazine.prototype = Object.create(Book.prototype)
// Inheritance Magazine Object
const mag1 = new Magazine('mag one', 'john doe', '2016', 'june')

console.log(mag1)
// after Inherit prototype
console.log(mag1.getSummary())