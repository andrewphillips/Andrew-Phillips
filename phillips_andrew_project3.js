//Andrew Phillips
// November 10 2011
// Project 3
// Apps Part Deux


//global variables
var appName = "\'CRAZY SUPER MONSTER SLAYER on SUNDAY\'";
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
		categories: 19, //Property String
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



// Method Function_II_ -- Arguement: Boolean & Number, Return: Boolean, Conditional & Nested Conditional, Property: Number

var	categoryTypes = {
		RPG: 19,
		Action: true,
		scrollKing: function ( needRPG, needAction ) {
			if ( needRPG <= this.RPG ) {
				if( needAction == this.Action) {
					console.log("I guess it\'s not an Adventure game.  I should look in the Action genre, or possibly others.");
					return true; //boolean returns
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



// Method Accessor _III_-- checking apps within the function,  Arguement: Array

var	genreTypes = {
		genreList: 19,
		genreGet: function (tooMany) {
			var lookingThroughGenres;
			console.log("Looking through all the categories is taking forever! I wonder how many I'll really look through.  I'll check all their names." + "  There seems to be: " + tooMany + ".");
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




// Return Array _IV_
function helps() {
	var helperApp =[];
	helperApp[0] = "Adventure";
	helperApp[1] = " Action";
	helperApp[2] = " and Role Playing";
	
	return helperApp.join(); // array return
}

console.log(helps());
console.log("Well at least my search has been narrowed.  Now I'll check the probability of where it can be on the AppStore.");

// Property: object - call from json file _V_
var	categoryList = {
			bigList: function (json) {
				console.log("Well this app seems to work just fine!  Look at all these results:");
				
				for (var key in json.categories) {
					var list = json.categories[key];
					console.log(list.name + " :: " + list.chanceToFind);
				}
				console.log("Looks like the main three categories are from Helper_App's first output.");
				console.log("I'm glad that I found that app to help me.");
				return categoryList;
			}
};




// Method Mutator searching my main 3 results yields a "bit more than I can chew" _VI_

var	lotsOfApps = {
		searchTheStore: 3,
		resultSearch: 1,
		appsInGenre: function (json) {
			var howManyApps;
				console.log("Now that I have my data, I need to dig into these genres and see what I can find.");
			for (var i = 0; i < json.big3.length; i++) {
				console.log(" ");
				if (json.big3[i].thought === false) {
					console.log("I should probably go onto the next genre.  I don't think my game is here.");
					//nested loop time!!!
					for (var u = 1; u <= this.searchTheStore; u++) {
						console.log("The " + json.big3[i].name +" has a " + this.resultSearch * json.big3[i].chance + " percent chance for me to find something.  This is the " + u + " time I've looked in it.");
					}
				} else {
					console.log("It looks like my app is inside the " + json.big3[i].name + " genre.");
				}
				var manyApps = json.big3[i];
				var multiplier = 90;
				var muchoList = manyApps.chance * this.searchTheStore;
				console.log("The " + manyApps.name + " genre has " + muchoList + " apps in it.");
				if (json.big3[i].thought === false) {
					var muchoList = muchoList + (this.searchTheStore * multiplier); //my mutator
					console.log("Yet after looking at all these, I feel as though I've seen " + muchoList + " apps.");
				} else {
					console.log("This genre has a ton of apps in it.  Sigh..");
				}
				
		}
		
		return howManyApps; //return object
	}	
};




// Run the functions!

//_I_
console.log("I heard about a sweet iPhone game that just came out, and I want to buy it!");
console.log("It\'s called " + appName + ".");
console.log("I\'ll check the AppStore to see if it\s there.");

lookedAdventure.adventureStart("Adventure");

//_II_
console.log("Anyhoo, I think I am getting close to finding my game!" );
console.log("Actually, maybe not :-(");

if (categoryTypes.scrollKing(15, true)) {
	console.log("I can't believe that I have to flick through all the different genres of games.");
} else {
	console.log("I just love looking through all of these " + categoryTypes.RPG + " genres.");
};

//_III_
var areThereTooManyApps = genreTypes.genreGet(appStoreList.apps);
console.log("Yep, That makes up the " + areThereTooManyApps + " different categories.  That probably means thousands of possibilities.  Ugh.");

console.log("Why can't I find what I'm looking for?  This is just waaaay to difficult!");
console.log("I heard about another application that can help you figure out the probability of where something is on the AppStore.  I'll use Helper_App and maybe I'll find it.");
console.log("Let's see the results it gave me:");

//_IV_
console.log(helps());
console.log("Well at least my search has been narrowed.  Now I'll check the probability of where it can be on the AppStore.");


//_V_
categoryList.bigList(json);

//_VI_
lotsOfApps.appsInGenre(json2);

console.log("Enough of this, there must be an easier way.  I've wasted so much time fiddling with probability.");
console.log("Ahh--the search function within the AppStore should suffice.");
console.log("I have been such an idiot.  I should have just looked up " + appName + " in the native search field and I would have saved so much time!");
