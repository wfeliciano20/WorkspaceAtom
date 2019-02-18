//jshint esversion:6

const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/peopleDB", {
    useNewUrlParser: true
});

const personSchema = new mongoose.Schema({

    name: String,
    age: Number

});

const Person = mongoose.model("Person", personSchema);

const person = new Person({

    name: "John",
    age: 37

});

const person2 = new Person({

    name: "Sully",
    age: 20

});

const person3 = new Person({

    name: "Timon",
    age: 21

});

// Person.insertMany([person2, person3], function(err) {

//     if (err) {
//         console.log(err);

//     } else {
//         console.log("Succesfully saved all the people to peopleDB");

//     }

// });

Person.find(function(err, persons) {

    if (err) {

        console.log(err);

    } else {

        persons.forEach(function(person) {

            console.log(person.name);

        });

        console.log(persons);

    }

});

//Only run this once since runnig it every time would add John every time
// person.save();