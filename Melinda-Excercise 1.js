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

const dog =
    {
        breed: ["Pitbull"],
        weightInPounds: "45lbs",
        age: 10,
        color: "grey",
        sterilized: false,
        shotRecords: {
            typeOfShot: "Rabies",
            date: new Date(),
        },
    };

dog.bark =function (){
    console.log("Woof!");
};

dog.getOlder = function(){
    // return x + 1;
    return dog.age + 1;
};

dog.fix = function(sterile){
    if( sterile === true);
    return false;
};

dog.vaccinate = function(){
    return  dog.shotRecords.typeOfShot + " and  Flea/Tick " + " on " + dog.shotRecords.date;

};

   console.log(" My dog is a " + dog.breed + " and weighs " + dog.weightInPounds + "." +" My " + dog.breed + "s" + " age is  " + dog.getOlder() + ". "
   + "My dog has been vaccinated for " + dog.shotRecords.typeOfShot + dog.vaccinate() + ". " +  dog.bark());










