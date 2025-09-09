class Book{
    constructor (title, author, year){
        this.title = title;
        this.author = author;
        this.year = year;
    }

    getSummary(){        
        return `${this.title} was written by ${this.author} in ${this.year}`;        
    }    
    getAge() {
        const years = new Date().getFullYear() - this.year;
        return `${this.title} is ${years} old`
    }
    revise(newYear){
        this.year = newYear;
        this.revise = true;
    }
    static topBookStore(){
        return 'panjeri';
    }

}

// Instantiate Obj
const book1 = new Book('Physics', 'Newton', '1860');
console.log(book1);
console.log(book1.author);
console.log(book1.year);
book1.revise('1970');
console.log(book1.year);// revised year
// for static
console.log(Book.topBookStore())