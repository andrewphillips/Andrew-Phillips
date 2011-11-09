// Andrew Phillips
// SDI 1111 - Project 2
// Fun times!

var appName = "CRAZY SUPER MONSTER SLAYER on SUNDAY";
var omgApps = [ "Puzzle", "RPG", "Family"];
var omgHowMany = [ 475, 1000, 973];



// procedure
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


// Boolean
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

// Number Time!
var genres = function( tooMany ) {
	var lookingThroughGenres;
		console.log("Looking through these different genres is taking forever! I wonder how many I'll really look through.  Let me see:");
	genreTypes = 1;
		while ( genreTypes <= tooMany ) {
			console.log(genreTypes);
			genreTypes++;
			}
	lookingThroughGenres = "I really should have narrowed my search instead of looking through " + tooMany + " different categories.  Ugh.";
	return lookingThroughGenres;			
};


// Stringy Functiony
var betterChance = function ( RPGs, Actions ) {
	var chanceInHeck;
		console.log("I have already looked through " + RPGs + " categories and it\'s definitely not an " + Actions + " game either.");
	chanceInHeck = "Maybe there is a better way to look for Apps.";
	return chanceInHeck;		
};


// Array Function Time!
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

// Run da Code
console.log("I heard about a sweet iPhone game that just came out, and I want to buy it!");
console.log("It\'s called " + appName + ".");
console.log("I\'ll check the AppStore to see if it\s there.");

adventureStart(7);

console.log("Anyhoo, I think I am getting close to finding my game!" );
console.log("Actually, maybe not :-(");

var probablyActionInstead = scrollKing( 19, true);
console.log(probablyActionInstead);

var areThereTooManyApps = genres(19);
console.log(areThereTooManyApps);

console.log("Why can't I find what I'm looking for?  This is just waaaay to difficult!");

var appyApps = betterChance( 4, "Action");
console.log(appyApps);

var myCategory = soManyApps();
console.log(myCategory);

console.log("Wow it\'s not a family game at all!");
console.log("I am such an ididot; why didn't I use the SEARCH FEATURE?!?!");
console.log("I found it!!!");
console.log("What took me almost 45 minutes I could have done in 15 seconds if I had just used common sense.");