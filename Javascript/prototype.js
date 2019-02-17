// esvertion:6
//Constructor
function Book(title, author, year) {
    // Properties

    this.title = title;
    this.author = author;
    this.year = year;
    // Methods

    Book.prototype.getSummary = function() {
        return `${this.title} was written by ${this.author} in ${this.year}.`;
    };

    Book.prototype.getAge = function() {
        const years = new Date().getFullYear - this.year;
    };
}

//Instantiate an Object
const book1 = new Book('Book one', 'John Doe', 2010);
const book2 = new Book('Book Two', 'Jane Doe', 2016);

console.log(book2);