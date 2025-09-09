// object of protos
const bookProtos = {
    getSummary: function (){
        return `${this.title} was written by ${this.author} in ${this.year}`
    }, 
    getAge: function (){
        const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} old`
    }
}

// Create Object
/* 
const book1 = Object.create(bookProtos);
book1.title = 'Book One'
book1.author = 'Shawal Arefin'
book1.year = '2022'*/

// Another way 
const book1 = Object.create(bookProtos, {
    title: { value: 'book one'},
    author: { value: 'Arefin Shawal'},
    year: { value: '2021'},
});

console.log(book1)