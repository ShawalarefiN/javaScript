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
/*
function Book(title, author, year){
    this.title = title;
    this.author = author;
    this.year = year;
}
// getSummary
Book.prototype.getSummary= function (){
    return `${this.title} was written by ${this.author} in ${this.year}`
}
// get Age
Book.prototype.getAge= function () {
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} old`
}
// Revise / change year
Book.prototype.revise = function(newYear){
    this.year = newYear;
    this.revise = true;
}

const book1 = new Book('Book one', 'John Doe', '2013')
const book2 = new Book('Book two', 'Jane Doe', '2016') 
console.log(book2)
book2.revise('2022')
console.log(book2)*/

// Inheritance 
/*
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
console.log(mag1.getSummary())*/

// continue afer 26:32