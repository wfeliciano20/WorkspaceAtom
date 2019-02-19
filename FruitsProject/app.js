//jshint esversion:6

const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/fruitsDB", {
    useNewUrlParser: true
});

const fruitSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, "The name of the fruit is required."]
    },
    rating: {
        type: Number,
        min: 1,
        max: 10
    },
    review: String

});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({

    name: "Apple",
    rating: 7,
    review: "Pretty solid as a fruit."

});

// fruit.save();

const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
    favouriteFruit: fruitSchema
});

const Person = mongoose.model("Person", personSchema);

const person = new Person({
    name: 'John',
    age: 37
});

// person.save();

const pineapple = new Fruit({
    name: 'PineApple',
    score: 9,
    review: "Great fruit."
});

//pineapple.save();

const person2 = new Person({
    name: 'Amy',
    age: 12,
    favouriteFruit: pineapple
});

//person2.save();

const kiwi = new Fruit({
    name: 'Kiwi',
    rating: 10,
    review: 'The best fruit!'
});

const orange = new Fruit({
    name: 'Orange',
    rating: 4,
    review: 'Too sour for me.'

});

const banana = new Fruit({
    name: 'Banana',
    rating: 3,
    review: 'Weird texture'
});

const fruitValidation = new Fruit({
    rating: 10,
    review: 'Peaches are so yummy!'
});

// fruitValidation.save();

Person.updateOne({
    name: 'John'
}, {
    favouriteFruit: kiwi
}, function(err) {
    if (err) {
        console.log(err);

    } else {
        console.log('Succesfully updated document.');

    }
});

// Fruit.insertMany([kiwi, orange, banana], function(err) {
//     if (err) {
//         console.log(err);

//     } else {
//         console.log('Succesfully saved all the fruits to fruitsDB');

//     }
// });

// How to read data from the db
Fruit.find(function(err, fruits) {
    if (err) {
        console.log(err);
    } else {
        mongoose.connection.close();
        fruits.forEach(function(fruit) {
            console.log(fruit.name);
        });

    }
});

//  How to update a document(entry)
// Fruit.updateOne({ _id: "5c6b3888d87ccf9963aa153a" }, { name: 'Peach' },
//     function(err) {
//         if (err) {
//             console.log(err);

//         } else {
//             console.log('Succesfully updated the document.');

//         }
//     }
// );

//  How to delete a document(entry)
// Fruit.deleteOne({ name: 'Peach' }, function(err) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log('Succesfully deleted the document.');
//     }
// });