// timeOut variables

const computerChoiceTimeoutDelay = 500;
const resultTimeoutDelay = 1000;


// closeModal allows player to close the Modal when you Start Game

function closeModal() {
    modal.style.display = "none";
}

let modal = document.getElementById("main-modal");
let btn = document.getElementById("modal-button");

btn.addEventListener('click', function() {
    closeModal();
})



// launchWinModal / closeWinModal acknowledges victory and resets score if they Play Again 

let winModal = document.getElementById("win-modal-container");
let winBtn = document.getElementById("win-btn");

winBtn.addEventListener('click', function() {
    closeWinModal();
})

function launchWinModal() {
    winModal.style.display = "block";
}


function closeWinModal() {
    winModal.style.display = "none";
    reset();
}

/**
* This function resets player & computer score.
*/
function reset() {
    playerScore = 0;
    computerScore = 0;
    playerScoreBox.innerText = playerScore;
    computerScoreBox.innerText = playerScore; 
}

// loseModal

let loseModal = document.getElementById("lose-modal-container");
let loseBtn = document.getElementById("lose-btn");

loseBtn.addEventListener('click', function() {
    closeLoseModal();
})

function launchLoseModal() {
    loseModal.style.display = "block";
}


function closeLoseModal() {
    loseModal.style.display = "none";
    reset();
}

// Player Choice inserts rock/paper/scissors icon

let player;

let playerBox = document.getElementById('player-choice');

function rockChoice() {
    player = 'rock';
    playerBox.innerHTML = '<i class="fa-solid fa-hand-back-fist"></i>';
}

function paperChoice() {
    player = 'paper';
    playerBox.innerHTML = '<i class="fa-solid fa-paper-plane"></i>';
}

function scissorsChoice() {
    player = 'scissors';
    playerBox.innerHTML = '<i class="fa-solid fa-scissors"></i>';
}


// Event Listeners for Rock/Paper/Scissors buttons

let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");


rock.addEventListener('click', function() {
    rockChoice();
    removeChoiceAi();
    removeResults();
    computerChoiceDelay();
})

paper.addEventListener('click', function() {
    paperChoice();
    removeChoiceAi();
    removeResults();
    computerChoiceDelay();
})

scissors.addEventListener('click', function() {
    scissorsChoice();
    removeChoiceAi();
    removeResults();
    computerChoiceDelay();
})


// Computer Choices insert rock/paper/scissors after a 1 second delay

let computer;

let computerBox = document.getElementById('computer-choice');

function rockChoiceAi() {
    computer = 'rock';
    computerBox.innerHTML = '<i class="fa-solid fa-hand-back-fist"></i>';
}

function paperChoiceAi() {
    computer = 'paper';
    computerBox.innerHTML = '<i class="fa-solid fa-paper-plane"></i>';
}

function scissorsChoiceAi() {
    computer = 'scissors';
    computerBox.innerHTML = '<i class="fa-solid fa-scissors"></i>';
}

function removeChoiceAi() {
    computerBox.innerHTML = '';
}

function removeResults() {
    results.innerHTML = '';
}

let computerOptions = [ 
    'rock',
    'paper',
    'scissors'
];


function computerChoice() {
    let computerRandom = computerOptions[Math.floor(Math.random() * computerOptions.length)]

    if (computerRandom === 'rock') {
        rockChoiceAi();
    } else if (computerRandom === 'paper') {
        paperChoiceAi();
    } else if (computerRandom === 'scissors') {
        scissorsChoiceAi();
    }
}

function computerChoiceDelay() {
    setTimeout(
        function() {
            computerChoice();
            chooseWinner();

        }, computerChoiceTimeoutDelay);
    }

// Calculates who the winner is

function chooseWinner() {
    if (player == computer) {
        resultsDraw();
    } else if (computer == 'rock'){
        (player == 'paper') ? resultsWin() : resultsLose()
    } else if (computer == 'paper'){
        (player == 'scissors') ? resultsWin() : resultsLose()
    } else if (computer == 'scissors'){
        (player == 'rock') ? resultsWin() : resultsLose()
    }
}

let results = document.getElementById('results');

function resultsWin() {
    results.innerHTML = '<h4>You Win!</h4>';
    incrementPlayerScore();
    if (playerScore == 3) {
        setTimeout(
            function() {
                gameOver(true);
            }, resultTimeoutDelay
        );
    }

}

function resultsLose() {
    results.innerHTML = '<h4>You Lose!</h4>';
    incrementComputerScore();
    if (computerScore == 3) {
        setTimeout(
            function() {
                gameOver(false);
            }, resultTimeoutDelay
        );
    }
}

function resultsDraw() {
    results.innerHTML = '<h4>DRAW!</h4>';
}

let playerScore = 0;
let computerScore = 0;

let playerScoreBox = document.getElementById('player-score');
let computerScoreBox = document.getElementById('computer-score');

function incrementPlayerScore() {
    playerScoreBox.innerText = ++playerScore;
}

function incrementComputerScore() {
    computerScoreBox.innerText = ++computerScore;
}

function gameOver(win) {
    if (win == true) {
        launchWinModal();
    } else {
        launchLoseModal();   
    }
}

// Light & Dark Mode functions

let stylesheet = document.getElementById('stylesheet');
let darkModeButton = document.getElementById('dark-btn');
let lightModeButton = document.getElementById('light-btn');

darkModeButton.addEventListener('click', function() {
    darkMode();
})

lightModeButton.addEventListener('click', function() {
    lightMode();
})

function darkMode() {
    stylesheet.href = 'assets/css/style2.css';
}

function lightMode() {
    stylesheet.href = 'assets/css/style.css';
}

