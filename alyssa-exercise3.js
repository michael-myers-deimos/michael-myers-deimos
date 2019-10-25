"use strict";

//https://www.w3resource.com/javascript-exercises/javascript-object-exercises.php
// 4. Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books. Go to the editor

var library = [
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title:  'Mockingjay: The Final Book of The Hunger Games',
        readingStatus: false
    }];

for (var i = 0; i < library.length; i ++){
    if (library[i].readingStatus === true){
        console.log(library[i].title + " written by " + library[i].author + " has been read.")
    } else {
        console.log(library[i].title + " written by " + " has not yet been read.")
    }
}