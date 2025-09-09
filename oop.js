/*const s1 = 'Hello';
console.log(typeof s1)

const s2 = new String('Hello');
console.log(typeof s2)

const book1 = {
    title: 'Book One',
    author: 'john doe',
    year: 2013,
    getSummary: function (){
        return `${this.title} was written by ${this.author} in ${this.year}`
    }
}
const book2 = {
    title: 'Book Two',
    author: 'jane doe',
    year: 2016,
    getSummary: function (){
        return `${this.title} was written by ${this.author} in ${this.year}`
    }
}
console.log(Object.keys(book2))
console.log(Object.values(book2))
console.log(book1.getSummary())
console.log(book2.getSummary())*/

//constructor ES5
/*
function Book(title, author, year){
    this.title = title;
    this.author = author;
    this.year = year;
    this.getSummary = function (){
        return `${this.title} was written by ${this.author} in ${this.year}`
    }
}
const book1 = new Book('Book one', 'John Doe', '2013')
const book2 = new Book('Book two', 'Jane Doe', '2016') 

console.log(book1.getSummary())*/

//prototype
function Book(title, author, year){
    this.title = title;
    this.author = author;
    this.year = year;
}
Book.prototype.getSummary= function (){return `${this.title} was written by ${this.author} in ${this.year}`}
Book.prototype.getAge= function () {
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} old`
}
const book1 = new Book('Book one', 'John Doe', '2013')
const book2 = new Book('Book two', 'Jane Doe', '2016') 

console.log(book2.getAge())