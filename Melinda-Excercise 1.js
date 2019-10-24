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

// My dogs breed is a PITBULL and WEIGHS 45 lbs, the AGE of my dog is 7 years old, the COLOR of my dog is , my dog is sterilized,
//     my dog has shot records for a "rabies shot, a lyme diesease shot and flea shot"  all dated the same day 10/20/2018.
//



function bark(){
    return "woof"
}

function getOlder(x){
    return x + 1
}

function fix(sterile){
    if( sterile === true);
    return false;
}

function vaccinate(){

}

var dog = {};
dog.breed = "Pitbull";
dog.weightInPounds =  "45lbs";
dog.age = '' ;
dog.color = "grey";
dog.sterilized = false;
dog.shotRecords = "bleh" ;


   console.log(" My dog is a " + dog.breed + " and weighs " + dog.weightInPounds + "." +" My " + dog.breed + "s" + " age is  " + dog.age+getOlder(5));










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
//         sterilized: "true",
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



