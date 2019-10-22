"use strict";


// Create a dog object
//
// The dog object should have properties for:
//
// breed (string),
//     weightInPounds (number),
//     age (number),
//     color (string),
//     sterilized (boolean),
//     shotRecords (array of objects with properties for date and typeOfShot)
// The dog object should have methods to:
//
//     bark() - will console.log "Woof!"
// getOlder() - will increase age by 1
// fix() - will set sterile to true if dog sterilized property is false
// vaccinate() - takes in an argument for the name of the shot and adds a new shot with the current date to the shotRecords array


var dog = {};


dog.breed = "Pitbull"
dog.weightInPounds = Math.random(1);
dog.age = Math.random(1);
dog.color = " grey ";
dog.sterilized = " ";
dog.shotRecords = " ";


   console.log(dog);










// var dog = [
//     {
//         breed: "Pitbull",
//         weightInPounds: Math.random(),
//         age: Math.random(),
//         color: " black ",
//         sterilized: ,
//         shotRecords: {
//             Date: "10/20/2019",
//             typeOfShot: "Rabies",
//         }
//
//     },
//     {
//         breed: " Beagle ",
//         weightInPounds: Math.random(),
//         age: Math.random(),
//         color: " black & orange ",
//         sterilized: "boolean",
//         shotRecords: {
//             Date: "7/05/2016",
//             typeOfShot: "Lyme",
//         }
//     }
//
//
//
// ];
// console.log(dog);






var books = [
    {
        title: "Hitchhiker's Guide to the Galaxy",
        author: {
            firstName: "Douglas",
            lastName: "Adams"
        }
    },
    {
        title: "Harry Potter and the Sorcerer's Stone",
        author: {
            firstName: "JK",
            lastName: "Rowling"
        }
    },
    {
        title: "Garfield Loses His Feet",
        author: {
            firstName: "Douglas",
            lastName: "Adams"
        }
    },
    {
        title: "Traction",
        author: {
            firstName: "Douglas",
            lastName: "Adams"
        }
    },
    {
        title: "Frankenstein",
        author: {
            firstName: "Douglas",
            lastName: "Adams"
        }
    }
];



