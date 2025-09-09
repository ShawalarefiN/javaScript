const s1 = 'Hello';
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
console.log(book2.getSummary())