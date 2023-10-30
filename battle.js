// Battle Game Project 10/27/2023

// Add an event handler to the button element
document.getElementById("button").onclick = startBattle;

// Definition of the startBattle() function which starts the game itself.

function startBattle() {
	// Clear any old messages in the document from previous games.
	document.getElementById("victory").textContent = "";
	document.getElementById("defeat").textContent = "";

	// Initial prompt for the user input that gets stored in a variable.

	let action = window.prompt("You're walking through the forest and a troll suddenly appears!\n\nDo you FIGHT the troll?\n\nDo you RUN from the troll?\n\nDo you BRIBE the troll?").toUpperCase();

	// Switch statement to handle the player's choice.
	switch(action){
		case "FIGHT": {
			fightBattle();
			break;
		} // End of case FIGHT.

		case "RUN": {
			runBattle();
			break;
		} //End of case RUN.

		case "BRIBE": {
			bribeBattle();
			break;
		} //End of case BRIBE

		default: {
			// We're because the user has not entered a valid choice
			// at the original prompt.
			window.alert("You entered : " + action + ". That is not a valid choice! Please try again!");
			startBattle();
		} // End of default case.
	} // End of switch statement
} // End of startBattle()

// Definition of the fightBattle() function

function fightBattle() {
	// Start collecting some user response variables
	let skill = window.prompt("Are you a skilled fighter? (YES or NO)").toUpperCase();
	let strong = window.prompt("Do you think you are stronger than a troll? (YES or NO)").toUpperCase();

	// Logic that analyzes the responses and creates the outcome.
	if(skill === "YES" || strong === "YES") {
		// The user said YES to at least one prompt.
		document.getElementById("victory").innerHTML = "You have won with either skill or strength!<br/>You survive another day!";
		document.getElementById("win").play();
		document.getElementById("button").textContent = "Try Again?";
	} else {
		document.getElementById("defeat").innerHTML = "You are not either skilled or strong!<br/>You have been defeate!";
		document.getElementById("lose").play();
		document.getElementById("button").textContent = "Try Again?";
	}
}//End of fightBattle()

// Definition of runBattle() function.
function runBattle() {
	// Variable to store user response
	let fast = window.prompt("Are you fast? (YES or NO)").toUpperCase();
	// Logic to analyze the variable and provide the outcome.
	if (fast === "YES") {
		document.getElementById("victory").innerHTML = "Your speed has saved you!</br>But can you live with your cowardice?";
		document.getElementById("win").play();
		document.getElementById("button").textContent = "Try Again";
	}
	else {
		document.getElementById("defeat").innerHTML = "You must be faster than a troll!</br>You have lost!";
		document.getElementById("lose").play();
		document.getElementById("button").textContent = "Try Again?";
		}

} //End of runBattle()

// Definition of bribeBattle() function.

function bribeBattle() {
	// Variable to store user response
	let money = window.prompt("You have to pay the troll-toll\nDo you have any money (YES or NO)").toUpperCase();
	// Check the amount against our condition
	if(money === "YES") {
		let amount = window.prompt("How much money do you have?\nPlease enter a NUMERIC VALUE");
		// Check the amount against our condition.
		if(amount > 50 ) {
			document.getElementById("victory").innerHTML = "Great job!</br>The troll is happy?";
			document.getElementById("win").play();
			document.getElementById("button").textContent = "Try Again";
		} else {
		// User doesn't have enough money.
		document.getElementById("defeat").innerHTML = "You don't have enough money!</br>You have lost!";
		document.getElementById("lose").play();
		document.getElementById("button").textContent = "Try Again?";
	}

	} else {
			// User doesn't have money.
			document.getElementById("defeat").innerHTML = "No money?</br> You have lost";
			document.getElementById("lose").play();
			document.getElementById("button").textContent = "Try Again";
	}
}