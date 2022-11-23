/*jshint esversion: 6 */

// timeOut variables

const computerChoiceTimeoutDelay = 500;
const resultTimeoutDelay = 1000;


/**
 * closeModal allows player to close the Modal when you Start Game
 */
function closeModal() {
    modal.style.display = "none";
}

let modal = document.getElementById("main-modal");
let btn = document.getElementById("modal-button");

btn.addEventListener('click', function() {
    closeModal();
});



// launchWinModal / closeWinModal acknowledges victory and resets score if they Play Again 

let winModal = document.getElementById("win-modal-container");
let winBtn = document.getElementById("win-btn");

winBtn.addEventListener('click', function() {
    closeWinModal();
});

/**
 * When the player wins this function changes display from none to block
 */
function launchWinModal() {
    winModal.style.display = "block";

}

/**
 * Changes modal back to none after they click Play Again
 * Resets scores after play again is clicked
 */
function closeWinModal() {
    winModal.style.display = "none";
    reset();
}

/**
* Resets player & computer score.
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
});

/**
 * When the player loses this function changes display from none to block
 */
function launchLoseModal() {
    loseModal.style.display = "block";
}

/**
 * Changes modal back to none after they click Play Again
 * Resets scores after play again is clicked
 */
function closeLoseModal() {
    loseModal.style.display = "none";
    reset();
}

// Player Choice inserts rock/paper/scissors icon

let player;

let playerBox = document.getElementById('player-choice');


/**
 * Inserts rock icon
 */
function rockChoice() {
    player = 'rock';
    playerBox.innerHTML = '<i class="fa-solid fa-hand-back-fist"></i>';
}

/**
 * Inserts paper icon
 */
function paperChoice() {
    player = 'paper';
    playerBox.innerHTML = '<i class="fa-solid fa-paper-plane"></i>';
}

/**
 * Inserts scissors icon
 */
function scissorsChoice() {
    player = 'scissors';
    playerBox.innerHTML = '<i class="fa-solid fa-scissors"></i>';
}


// Event Listeners for Rock/Paper/Scissors buttons

let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");


rock.addEventListener('click', function() {
    preventMultipleRockClicks();
    rockChoice();
    removeChoiceAi();
    removeResults();
    computerChoiceDelay();
});

paper.addEventListener('click', function() {
    preventMultiplePaperClicks();
    paperChoice();
    removeChoiceAi();
    removeResults();
    computerChoiceDelay();
});

scissors.addEventListener('click', function() {
    preventMultipleScissorsClicks();
    scissorsChoice();
    removeChoiceAi();
    removeResults();
    computerChoiceDelay();
});


// Computer Choices insert rock/paper/scissors after a 1 second delay

let computer;

let computerBox = document.getElementById('computer-choice');

/**
 * Inserts computers choice of rock
 */
function rockChoiceAi() {
    computer = 'rock';
    computerBox.innerHTML = '<i class="fa-solid fa-hand-back-fist"></i>';
}

/**
 * Inserts computers choice of paper
 */
function paperChoiceAi() {
    computer = 'paper';
    computerBox.innerHTML = '<i class="fa-solid fa-paper-plane"></i>';
}

/**
 * Inserts computers choice of scissors
 */
function scissorsChoiceAi() {
    computer = 'scissors';
    computerBox.innerHTML = '<i class="fa-solid fa-scissors"></i>';
}

/**
 * Removes computers choice
 */
function removeChoiceAi() {
    computerBox.innerHTML = '';
}
/**
 * Removes text from results section after each turn
 */
function removeResults() {
    results.innerHTML = '';
}

let computerOptions = [ 
    'rock',
    'paper',
    'scissors'
];

/**
 * Randomly selects computers choice from array of computerOptions
 */
function computerChoice() {
    let computerRandom = computerOptions[Math.floor(Math.random() * computerOptions.length)];

    if (computerRandom === 'rock') {
        rockChoiceAi();
    } else if (computerRandom === 'paper') {
        paperChoiceAi();
    } else if (computerRandom === 'scissors') {
        scissorsChoiceAi();
    }
}

/**
 * Delays the computers choice from appearing by 500ms
 */
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
    }
    else if (isPlayerVictorious()) {
        resultsWin();
    } else {
        resultsLose();
    }
}

function isPlayerVictorious() {
    return  (computer == 'rock' && player == 'paper') || 
            (computer == 'paper' && player == 'scissors') || 
            (computer =='scissors' && player == 'rock');
}

let results = document.getElementById('results');
/**
 * Changes results text to show who won the round
 * calls IncrementPlayerScore() function
 * Checks if playerScore has reached 5 wins
 */
function resultsWin() {
    results.innerHTML = '<h4>You Win!</h4>';
    incrementPlayerScore();
    if (playerScore == 5) {
        setTimeout(
            function() {
                gameOver(true);
            }, resultTimeoutDelay
        );
    }

}

/**
 * Changes results text to show who lost the round
 * calls IncrementComputerScore() function
 * Checks if computerScore has reached 5 wins
 */
function resultsLose() {
    results.innerHTML = '<h4>You Lose!</h4>';
    incrementComputerScore();
    if (computerScore == 5) {
        setTimeout(
            function() {
                gameOver(false);
            }, resultTimeoutDelay
        );
    }
}

/**
 * Displays text in the results section when there is a draw
 */
function resultsDraw() {
    results.innerHTML = '<h4>DRAW!</h4>';
}

// Increment Player & Computer Score

let playerScore = 0;
let computerScore = 0;

let playerScoreBox = document.getElementById('player-score');
let computerScoreBox = document.getElementById('computer-score');

/**
 * Increment player by 1
 */
function incrementPlayerScore() {
    playerScoreBox.innerText = ++playerScore;
}

/**
 * Increment computer by 1
 */
function incrementComputerScore() {
    computerScoreBox.innerText = ++computerScore;
}


/**
 * 
 * GameOver function is called if player wins or loses
 */
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
});

lightModeButton.addEventListener('click', function() {
    lightMode();
});

function darkMode() {
    stylesheet.href = 'assets/css/style2.css';
}

function lightMode() {
    stylesheet.href = 'assets/css/style.css';
}

// Disable multiple clicks on player choices

/**
 * Prevents player from selecting Rock
 * More than once every 1000ms
 */
function preventMultipleRockClicks() {
    rock.disabled = true;
    setTimeout(function() {
        rock.disabled = false;
    }, resultTimeoutDelay );
}

/**
 * Prevents player from selecting Paper
 * More than once every 1000ms
 */
function preventMultiplePaperClicks() {
    paper.disabled = true;
    setTimeout(function() {
        paper.disabled = false;
    }, resultTimeoutDelay );
}

/**
 * Prevents player from selecting Scissors
 * More than once every 1000ms
 */
function preventMultipleScissorsClicks() {
    scissors.disabled = true;
    setTimeout(function() {
        scissors.disabled = false;
    }, resultTimeoutDelay );
}
