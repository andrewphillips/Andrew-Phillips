//Andrew Phillips
// November 10 2011
// Project 3
// Apps & Cases


//global variables
var appName = "CRAZY SUPER MONSTER SLAYER on SUNDAY";
var omgApps = [ "Puzzle", "RPG", "Family"];
var omgHowMany = [ 475, 1000, 973];
var helperApp = [];


//Property Array
var appStoreList = {
		apps: [  "Action", 
					" Adventure", 
					" Arcade", 
					" Board", 
					" Card", 
					" Casino", 
					" Dice", 
					" Educational", 
					" Family", 
					" Kids", 
					" Music", 
					" Puzzle", 
					" Racing", 
					" Role Playing", 
					" Simulation", 
					" Sports", 
					" Strategy", 
					" Trivia", 
					" and Word", ]
};




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
console.log("I heard about a sweet iPhone game that just came out, and I want to buy it!");
console.log("It\'s called " + appName + ".");
console.log("I\'ll check the AppStore to see if it\s there.");

lookedAdventure.adventureStart("Adventure");


// Method Function_II_ -- Arguement: Boolean & Number, Return: Boolean, Conditional & Nested Conditional, Property: Number

var	categoryTypes = {
		RPG: 19,
		Action: true,
		scrollKing: function ( needRPG, needAction ) {
			if ( needRPG <= this.RPG ) {
				if( needAction == this.Action) {
					console.log("I guess it\'s not an Adventure game.  I should look in the Action genre, or possibly others.");
					return true; 
				} else {
					console.log("I found the game!  That was quick!");
					return false; 
				}
			} else {
				console.log("The game has nothing to do with adventure.  Why am I looking here?");
				return false; 
			}
		}
};

console.log("Anyhoo, I think I am getting close to finding my game!" );
console.log("Actually, maybe not :-(");

if (categoryTypes.scrollKing(15, true)) {
	console.log("I can't believe that I have to flick through all these different genres of games.");
} else {
	console.log("I just love looking through all of these " + categoryTypes.RPG + " genres.");
};


// Method Accessor _III_-- checking apps within the function,  Arguement: Array

var	genreTypes = {
		genreList: 19,
		genreGet: function (tooMany) {
			var lookingThroughGenres;
			console.log("Looking through all the categories is taking forever! I wonder how many I'll really look through.  I'll check all their names." + "  There seems to be " + tooMany + ".");
			console.log("Now to double check:");
			numberGenres = 1;
				while ( this.genreList >= numberGenres ) {
					console.log(numberGenres);
					numberGenres++; // Here's math
				}
			lookingThroughGenres = this.genreList;
			return lookingThroughGenres;	// this should return a number		
		}
};

var areThereTooManyApps = genreTypes.genreGet(appStoreList.apps);
console.log("That makes up the " + areThereTooManyApps + " different categories.  That probably means thousands of possibilities.  Ugh.");

console.log("Why can't I find what I'm looking for?  This is just waaaay to difficult!");
console.log("I heard about another application that can help you figure out the probability of where something is on the AppStore.  I'll use that and maybe it can help.");
console.log("Let's see the results it gave me:");


// Return Array
function helps() {
	var helperApp =[];
	helperApp[0] = "Adventure";
	helperApp[1] = " Action";
	helperApp[2] = " and Role Playing";
	
	return helperApp.join(); // array return
}

console.log(helps());
console.log("Well at least my search has been narrowed.  Now I'll check the probability of where it can be on the AppStore.");

// Property: object - call from json file
var	categoryList = {
			bigList: function (json) {
				console.log("Well this app seems to work just fine!  Look at all these results:");
			
			}

};






// Method Mutator  giving myself a chance to find my game with an app that estimates probability 
/*
var	lotsOfApps = {
		


}



var soManyApps = function() {
	var willIfind;
		var findMyApp = 2
			console.log("Let me get my bearings.  I have been at this for 30 minutes - I need to find it soon!");
		for (var i = 0; i < omgHowMany.length; i++) {
			console.log("The " + omgApps[i] + " has " + omgHowMany[i] + " apps, yet it really feels like they have " + omgHowMany[i]*findMyApp + " apps!" );
		};
	varNamesEscapeMe = "Maybe it really is a " + omgApps[2] + " game.  I didn't totally consider that genre.";
	return varNamesEscapeMe;
};
*/