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

        console.log(persons);

    }

});

//Only run this once since runnig it every time would add John every time
// person.save();

// const mongoose = require('mongoose');

// mongoose.connect("mongodb://localhost:27017/fruitsDB", { useNewUrlParser: true });

// const fruitSchema = new mongoose.Schema({

//     name: String,
//     rating: Number,
//     review: String

// });

// const Fruit = mongoose.model("Fruit", fruitSchema);

// const fruit = new Fruit({

//     name: "Apple",
//     rating: 7,
//     review: "One a day keeps the doctor away."

// });

//Only run this once since runnig it every time would create a new apple
//fruit.save();

//How to do things without mongoose

// const MongoClient = require('mongodb').MongoClient;

// const assert = requier('assert');

// const url = 'mongodb://localhost:27017';

// const dbName = 'fruitsDB';

// const client = new MongoClient(url, { useNewUrlParser: true });

// client.connect(function(err) {

//     assert.equal(null, err);

//     console.log("Connected succesfully to server");

//     const db = client.db(dbName);

//     findDocuments(db, function() {

//         client.close();

//     });

// });

// const insertDocuments = function(db, callback) {

//     //Get the documents collection
//     const collection = db.collection('fruits');

//     //Insert some documents
//     collection.insertMany([

//         {
//             name: "Apple",
//             score: 8,
//             review: "Great fruit"
//         },
//         {
//             name: "Orange",
//             score: 6,
//             review: "Not so sweet"
//         },
//         {
//             name: "Banana",
//             score: 9,
//             review: "Great stuff!"
//         }

//     ], function(err, result) {

//         assert.equal(err, null);

//         assert.equal(3, result.result.n);

//         assert.equal(3, result.ops.length);

//         console.log("Inserted 3 documents into the collecttion");

//         callback(result);

//     });

// };

// const findDocuments = function(db, callback) {

//     //Get the documents collection
//     const collection = db.collection('fruits');

//     //Find some documents
//     collection.find({}).toArray(function(err, fruits) {

//         assert.equal(err, null);

//         console.log("Found the following records");

//         console.log(fruits);

//         callback(fruits);

//     });

// };