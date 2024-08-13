function getUserChoice (userInput) {
    userInput = userInput.toLowerCase();
    const validChoices = new Set(['rock', 'paper', 'scissors']);
    if (validChoices.has(userInput)) {
        return userInput;
    } else { 
        return "Invalid choice! Please choose 'rock', 'paper', or 'scissors'.";
    }
}

function getComputerChoice () {
    const randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
         return 'rock'; 
    } 
    if (randomNumber === 1) {
        return 'paper'
     } 
     if (randomNumber === 2) { 
        return 'scissors';
    }
}

function determineWinner (userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'The game is a tie!';
    }

    if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return 'Computer wins!';
        } else if (computerChoice === 'scissors') {
        return 'You win!';
        } }

    if (userChoice === 'paper') {
        if (computerChoice === 'rock') {
            return 'You win!';
        } else if (computerChoice === 'scissors') {
            return 'Computer wins!';
        } }

    if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            return 'Computer wins!';
        } else if (computerChoice === 'paper') {
            return 'You wins!';
        } }
    if (userChoice === 'Bomb') {
            return 'You win!';
    }
}
const userChoice = getUserChoice('rock');
const computerChoice = getComputerChoice();

function playGame () {

    var userChoice = getUserChoice('rock');
    var computerChoice = getComputerChoice();
}
console.log('User\'s Choise:', userChoice);
console.log('Computer\'s Choice:', computerChoice);
console.log('Results:', determineWinner(userChoice,computerChoice));

playGame ()
