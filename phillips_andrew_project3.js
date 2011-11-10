//Andrew Phillips
// November 10 2011
// Project 3
// Apps & Cases

var appName = "CRAZY SUPER MONSTER SLAYER on SUNDAY";
var omgApps = [ "Puzzle", "RPG", "Family"];
var omgHowMany = [ 475, 1000, 973];


// Method Procedure _I_
var	lookedAdventure = {
		type: "game",
		categories: 19,
			adventureStart: function (search) {
			console.log("I think this " + this.type + " is in the " + search + " genre.");
			if (this.categories >= 20) {
				console.log("It doesn\'t seem to be an " + search + " game.  Dangit!");
			} else {
				console.log("Yeah it\'s got to be an " + search + " game!  Cool beans!");
					if(this.categories >= 10 && this.categories <= 20) {
						console.log("Wait - who says \'Cool Beans\' anymore?");
					} else {
						console.log("Saying \'Cool Beans\' makes me awesome!");
			}
		}	
	}
};

lookedAdventure.adventureStart("Adventure");


// _II_

var scrollKing = function ( needRPG, needAction ) {
	var notAdventure;
	if ( needRPG <= 20 ) {
		if( needAction === true) {
			console.log("I guess it\'s not an Adventure game.  I should look in the Action genre, or possibly others.");
		} else {
			console.log("I found the game!  That was quick!");
		};
	} else {
		console.log("The game has nothing to do with adventure.  Why am I looking here?");
	};

	notAdventure = "Oh wow.  There are " + needRPG + " genres on the AppStore.";
	return notAdventure;
};
