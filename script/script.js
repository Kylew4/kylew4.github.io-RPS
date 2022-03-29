
/* 
Main function which creates press variable so all 3 buttons lead to same function - on 
click code will store text inside button run random math to select computer input to use then runs checkInput function and hide/reveal functions
*/
	var press = document.querySelectorAll(".press");
	
	press.forEach((press) => {
		press.addEventListener("click", function() {
			
			const playInput = this.textContent;
			const compInput = ["Rock", "Paper", "Scissors"];
			const compAnswer = compInput[Math.floor(Math.random() * 3)];
	
	checkInputs(playInput, compAnswer);
	hide();
	reveal();
		});
	});
	/* Logic for RPS game using nested if statements compares player inpur and random computer generated input and follows logic to produce answer
	*/
		function checkInputs(playInput, compAnswer){
			
			if (playInput == compAnswer){
				document.getElementById("result").innerHTML = "I had " + compAnswer + " too. Looks like its a draw.";
			return;
			}
			if (playInput == "Rock"){
				if (compAnswer == "Scissors") {
					document.getElementById("result").innerHTML ="Winner! I had " + compAnswer + ". I'll get you next time";
				}
				else {
					document.getElementById("result").innerHTML ="You lose, unlucky, I was thinking of " + compAnswer + ".";
				}
			}
			else if (playInput == "Scissors"){
				if (compAnswer == "Paper") {
					document.getElementById("result").innerHTML ="Winner! I had " + compAnswer + ". I'll get you next time";
				}
				else {
					document.getElementById("result").innerHTML ="You lose, unlucky, I was thinking of " + compAnswer + ".";
				}
			}
			else if (playInput == "Paper") {
				if (compAnswer == "Rock") {
					document.getElementById("result").innerHTML ="Winner! I had " + compAnswer + ". I'll get you next time";
				}
				else {
					document.getElementById("result").innerHTML ="You lose, unlucky, I was thinking of " + compAnswer + ".";
				}
			}
		}
	
	

/* This was my first attempt - created game with 3 seperate functions for each individual button  to run logic but wanted to make something more efficent that just needed one function so redid with above code
function selectRock(){
	var compInput = ["rock", "paper", "scissors"];
	var compAnswer = compInput[Math.floor(Math.random() * 3)];
	if (compAnswer == "rock"){
		document.getElementById("result").innerHTML = "I was thinking of rock too! It's a draw.";
	}
	else if (compAnswer == "paper") {
		document.getElementById("result").innerHTML = "You lose! I chose paper.";
	}
	else {
		document.getElementById("result").innerHTML = "Winner, I had Scissors! I'll get you next time!";
	}
	hide();
	reveal();
}

function selectPaper(){
	var compInput = ["rock", "paper", "scissors"];
	var compAnswer = compInput[Math.floor(Math.random() * 3)];
	if (compAnswer == "rock"){
		document.getElementById("result").innerHTML = "Winner, I had Rock! I'll get you next time.";
	}
	else if (compAnswer == "paper") {
		document.getElementById("result").innerHTML = "I was thinking of Paper too! It's a draw.";
	}
	else {
		document.getElementById("result").innerHTML = "You lose! I chose Scissors.";
	}
	hide();
	reveal();
	
}


function selectScissors(){
	var compInput = ["rock", "paper", "scissors"];
	var compAnswer = compInput[Math.floor(Math.random() * 3)];
	if (compAnswer == "rock"){
		document.getElementById("result").innerHTML = "You lose! I chose Rock.";
	}
	else if (compAnswer == "paper") {
		document.getElementById("result").innerHTML = "Winner, I had Paper! I'll get you next time.";
	}
	else {
		document.getElementById("result").innerHTML = "It's a draw, I was thinking of Scissors too!";
	}
	hide();
	reveal();
	
}

*/
/* used hide() and reveal() functions to hide rock paper and scissors buttons after click and show answer message as well as play again button */
function hide(){
	document.getElementById("main").style.display= "none";
}
function reveal() {
	document.getElementById("pipe").style.display="block";
}