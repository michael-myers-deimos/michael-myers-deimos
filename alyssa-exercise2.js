"use strict";

// https://java.codeup.com/extra-exercises/javascript/arrays-and-objects/
//Exercise 4 from this website ^^
// Write a function, adminList() that takes in an array of user objects and returns a count of all admins based on the isAdmin property. Refactor to return an array of admin-only user emails. Refactor again to return an array of user objects that are admins.
var admins = [
    {
        isAdmin: true,
        email: 'user1@email.com'
    },
    {
        isAdmin: true,
        email: 'user2@email.com'
    },
    {
        isAdmin: false,
        email: 'user3@email.com'
    }
];

function adminList(){
    var countAdmins = 0;
    for (var i = 0; i< admins.length; i++){
        if (admins[i].isAdmin === true){
            countAdmins++
        }
    }
    return countAdmins;
}

console.log(adminList());

function adminEmail(){
    var email = [];
    for (var i = 0; i < admins.length; i++){
        if (admins[i].isAdmin === true){
            email.push(admins[i].email)
        }
    }
        return email;
}

console.log(adminEmail());


function isAdmin(){
    var adminObject = [];
    for (var i = 0; i < admins.length; i++){
        if (admins[i].isAdmin === true){
            adminObject.push(admins[i])
        }
    }
    return adminObject;
}

console.log(isAdmin());