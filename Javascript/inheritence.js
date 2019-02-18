//  use 'esvertion:6'
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

}

//Magazine Constructor
function Magazine(title, author, year, month) {
    Book.call(this, title, author, year);
    this.month = month;
}

// Inherit Prototype
Magazine.prototype = Object.create(Book.prototype);

//Instantiate Magazine Object
const mag1 = new Magazine('Mag One', 'John Doe', 2019, 'Feb');

//Use Magazine Constructor
Magazine.prototype.constructor = Magazine;

console.log(mag1);