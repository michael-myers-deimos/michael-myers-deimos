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

// const dogs =
//     [
//         {
//             breed: ["Pitbull"],
//             weightInPounds: "45lbs",
//             age:  10,
//             color: "Grey",
//             sterilized: true,
//             shotRecords: {
//                 typeOfShot: "& Rabies",
//                 date: new Date(),
//             },
//         },
//         {
//             breed: ["Beagle"],
//             weightInPounds: "30lbs",
//             age: 5,
//             color: "Brown and white",
//             sterilized: false,
//             shotRecords: {
//                 typeOfShot: " & Lyme ",
//                 date: new Date(),
//
//             },
//         },
//         {
//             breed: ["Pug"],
//             weightInPounds: "20lbs",
//             age: 2,
//             color: "Brown and White",
//             sterilized: false,
//             shotRecords: {
//                 typeOfShot: " & Canine Distemper",
//                 date: new Date(),
//
//             },
//             getOlder: function () {
//                 for (var i = 0; i < dogs.length; i++) {
//                     dogs[i].age++;
//                 }
//             }
//         }
//     ];
// // var dog= dogs[0];
// var dog = {
//     getOlder: function () {
//         for (var i = 0; i < dogs.length; i++) {
//             dogs[i].age++;
//         }
//     },
//
//     bark: function() {
//     console.log("Woof!");
//     },
//
//     fix: function () {
//         for(var i = 0; i < dogs.length; i++) {
//             if (dogs[i].sterilized === false) {
//                 return true;
//             } else {
//                 return false
//             }
//         }
//
//     },
//
//     vaccinate: function () {
//         for(var i = 0; i < dogs.length; i++){
//             return dogs[i].shotRecords.typeOfShot + " and  Flea/Tick " + " on " + dogs[i].shotRecords.date;
//         }
//
//
// }
// };
//     for (let i = [0]; i < dogs.length ; i++){
//    console.log(" My dog is a " + dogs[i].breed + " and weighs " + dogs[i].weightInPounds + "." +" My " + dogs[i].breed + "s" + " age is  " +  dog.getOlder(dogs[0].age) + ". "
//    + "My dog has been vaccinated for " + dogs[i].shotRecords.typeOfShot + dog.vaccinate(dogs[i]) + ". " + " My dog is the color " + dogs[i].color + " and has been fixed " + dog.fix(dogs[i]) + dog.bark(dogs[i]) );
//     }
//
//
// // 2nd Exercise
// // Write a JavaScript program where the program takes a random integer between 1 to 10, the user is then prompted to input a guess number. If the user input matches with guess number, the program will display a message "Good Work" otherwise display a message "Not matched"
// //
//
// var Randonum = Math.ceil(Math.random() * 40);
// console.log(Randonum);
// var number = prompt(" Guess a number between 1 and 40");
// if (Randonum == number)
//     alert("Great Job!!");
// else
//     alert("Looks like you cant read the computers mind the number was " + Randonum);
//
//
// // 3rd Exercise
//
// //
// // Write a JavaScript program to create a new string from a given string with the first character of the given string added at the front and back.
// //
//
//
// // Substring is a inbuilt function in javascript used to return a  part of string from start of index to end of index
//
//     function moveToFrontEnd(str)
// {
//     var first = str.substring(0,1);
//     return first + str + first;
// }
// console.log(moveToFrontEnd('tired'));
// console.log(moveToFrontEnd('anxious'));
// console.log(moveToFrontEnd('hungry'));

// WEEEEEEEEEEEEEEEEK 2





var button1 =  document.getElementById('get');
var output =  document.getElementById('output').innerHTML;
button1.addEventListener('click', zodiac);

function zodiac(e) {
    e.preventDefault();
    var birthmonth = document.getElementById("month").value;
    var birthday = document.getElementById("day").value;
    // console.log(birthmonth);
    // console.log(birthday);
    // var result = " unknown because you didn't put a valid date.";

    if (birthmonth === 12 && birthday >= 22 || birthmonth === 1 && birthday <= 19) {
        // result = ("Aquarius");
       output = "cap";
    }
    if (birthmonth === 1 && birthday >= 20 || birthmonth === 2 && birthday <= 18) {
        output = "aqua";
        if (birthmonth === 2 && birthday >= 19 || birthmonth === 3 && birthday <= 20) {
           output = "aqua";

        }
    }
}

 // WEEK 2 EXERCISE 2  INSERT WHITE SPACES

function insertWhitespace(s) {
    return s.split("").map((i, index)=>{
        if(index!==0)
            if(i !== i.toLowerCase())
                return " "+i;
        return i;
    }).join("");

}
console.log(insertWhitespace('MyNameIsMelinda'));

// WEEK 2 EXERCISE 3

function myspace(str) {

    var fuse=str.split('');
    for( let x=0;x<fuse.length;x++){
        if(fuse[x]==='a'){
            fuse[x]=4
        }else if(fuse[x]==='e'){
            fuse[x]=3
        }else if(fuse[x]==='i'){
            fuse[x]=1
        }else if(fuse[x]==='o'){
            fuse[x]=0
        }else if(fuse[x]==='s'){
            fuse[x]=5
        }
    }

    return fuse.join('')

}
console.log(myspace('Melinda'));



// document.getElementById('get').onclick = function () {
// document.getElementById('output').interHTML = "aqua";
// result = ("Aquarius");
// document.getElementById("output").innerHTML = ('aqua');
// document.getElementById('get').onclick = function()
