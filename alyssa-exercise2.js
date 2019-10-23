"use strict";

// https://java.codeup.com/extra-exercises/javascript/arrays-and-objects/
//Exercise 2 from this website ^^
// Write a function, getOlder() that takes in array of dog objects and increases the value of each object's age property by 1.
var dogs = [
    {
        name: "Chompers",
        breed: "Pug",
        age: 7
    },
    {
        name: "Freddy",
        breed: "Lab",
        age: 4
    },
    {
        name: "Mr. Pig",
        breed: "Mastif",
        age: 10
    }
];

function getOlder(){
    for (var i = 0; i< dogs.length; i++){
        dogs[i].age++
    }
    return dogs;
}

console.log(getOlder());
