function Book(title, year) {
  this.title = title;
  this.year = year;
}

// Add a shared method
Book.prototype.getAge = function () {
  return new Date().getFullYear() - this.year;
};

const book1 = new Book("Book One", 2000);
const book2 = new Book("Book Two", 2010);

console.log(book1.getAge()); // 25
console.log(book2.getAge()); // 15
