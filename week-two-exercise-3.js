"use strict";


// variable with an array of games
var myFavoriteGames = ["Halo 3", "LoZ: Wind Waker", "Super Monkey Ball", "Castle Crashers", "Super Smash Bros.", "Gauntlet Dark Legacy", "Horizon Zero Dawn", "Tetris", "Trials Evolution", "Jak 3"];

// chooses a random game
var games = myFavoriteGames[Math.floor(Math.random() * myFavoriteGames.length)];
alert(games);