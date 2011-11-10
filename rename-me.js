//Andrew Phillips
// November 10 2011
// Project 3
// Apps & Cases

var appName = "CRAZY SUPER MONSTER SLAYER on SUNDAY";
var omgApps = [ "Puzzle", "RPG", "Family"];
var omgHowMany = [ 475, 1000, 973];


// Method Procedure _I_


var adventureStart = function(lookInAdventure) {
	console.log("I think this game is in the Adventure genre.");
	if(lookInAdventure >= 8) {
		console.log("It doesn\'t seem to be an Adventure game.  Dangit!");
	} else {
		console.log("Yeah it\'s got to be an adventure game!  Cool beans!");
			if(lookInAdventure >= 5 && lookInAdventure <= 12) {
				console.log("Wait - who says \'Cool Beans\' anymore?");
			} else {
				console.log("Saying \'Cool Beans\' makes me awesome!");
			};
	};
};
