/*jshint esversion: 6 */

// Global Variables

let gameFinished = false;

// Player button variables

let playerBtn = document.querySelectorAll('.player-btn');

let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");

// Default Player Variables

let playerScore = 0;
let computerScore = 0;

let playerScoreBox = document.getElementById('player-score');
let computerScoreBox = document.getElementById('computer-score');

let player;

let playerBox = document.getElementById('player-choice');

// Computer Variables

let computerOptions = [ 
    'rock',
    'paper',
    'scissors'
];

let computer;

let computerBox = document.getElementById('computer-choice');

// Light & Dark Mode Variables

let stylesheet = document.getElementById('stylesheet');
let darkModeButton = document.getElementById('dark-btn');
let lightModeButton = document.getElementById('light-btn');

// Results variables

let results = document.getElementById('results');

// timeOut variables

const mainDelay = 500;
const btnDelay = 500;

// Modal Variables

let loseModal = document.getElementById("lose-modal-container");
let loseBtn = document.getElementById("lose-btn");

const winModalText = document.getElementById('win-modal-text');
const loseModalText = document.getElementById('lose-modal-text');

let winModal = document.getElementById("win-modal-container");
let winBtn = document.getElementById("win-btn");

let modal = document.getElementById("main-modal");
let btn = document.getElementById("modal-button");

// Code that controls Main Modal, Win Modal and Lose Modal


/**
 * closeModal allows player to close the main Modal Window when you first open the website
 */
function closeModal() {
    modal.style.display = "none";
}

btn.addEventListener('click', function() {
    closeModal();
});



// launchWinModal / closeWinModal acknowledges victory and resets score if they Play Again 


winBtn.addEventListener('click', function() {
    gameFinished = false;
    enablePlayerBtns();
    closeWinModal();
});


/**
 * When the player wins this function changes display from none; to block;
 * 
 */
function launchWinModal() {
    winModal.style.display = "block";
    winModalText.textContent = `Score: ${playerScore} - ${computerScore}`;

}

/**
 * Changes modal back to none after they click Play Again
 * Resets scores after play again is clicked
 */
function closeWinModal() {
    winModal.style.display = "none";
    reset();
}

// loseModal

loseBtn.addEventListener('click', function() {
    gameFinished = false;
    enablePlayerBtns();
    closeLoseModal();
});

/**
 * When the player loses this function changes display from none to block
 */
function launchLoseModal() {
    loseModal.style.display = "block";
    loseModalText.textContent = `Score: ${playerScore} - ${computerScore}`;
}

/**
 * Changes modal back to none after they click Play Again
 * Resets scores after play again is clicked
 */
function closeLoseModal() {
    loseModal.style.display = "none";
    reset();
}


// Reset Player Score Code

/**
* Resets player & computer score.
*/
function reset() {
    playerScore = 0;
    computerScore = 0;
    playerScoreBox.innerText = playerScore;
    computerScoreBox.innerText = playerScore; 
    computerBox.innerHTML = '<i class="fa-solid fa-question"></i>';
    playerBox.innerHTML = '<i class="fa-solid fa-question"></i>';
    removeResults();
}



// Player Choice inserts rock/paper/scissors icon

/**
 * Inserts rock icon into playerBox
 */
function rockChoice() {
    player = 'rock';
    playerBox.innerHTML = '<i class="fa-solid fa-hand-back-fist"></i>';
}

/**
 * Inserts paper icon into playerBox
 */
function paperChoice() {
    player = 'paper';
    playerBox.innerHTML = '<i class="fa-solid fa-paper-plane"></i>';
}

/**
 * Inserts scissors icon into playerBox
 */
function scissorsChoice() {
    player = 'scissors';
    playerBox.innerHTML = '<i class="fa-solid fa-scissors"></i>';
}


// Event Listeners for Rock/Paper/Scissors buttons


rock.addEventListener('click', function() {
    rockChoice();
    removeChoiceAi();
    removeResults();
    computerChoiceDelay();
});

paper.addEventListener('click', function() {
    paperChoice();
    removeChoiceAi();
    removeResults();
    computerChoiceDelay();
});

scissors.addEventListener('click', function() {
    scissorsChoice();
    removeChoiceAi();
    removeResults();
    computerChoiceDelay();
});


// Computer Choices insert rock/paper/scissors after a 500ms delay

/**
 * Inserts computers choice of rock into computerBox
 */
function rockChoiceAi() {
    computer = 'rock';
    computerBox.innerHTML = '<i class="fa-solid fa-hand-back-fist"></i>';
}

/**
 * Inserts computers choice of paper into computerBox
 */
function paperChoiceAi() {
    computer = 'paper';
    computerBox.innerHTML = '<i class="fa-solid fa-paper-plane"></i>';
}

/**
 * Inserts computers choice of scissors into computerBox
 */
function scissorsChoiceAi() {
    computer = 'scissors';
    computerBox.innerHTML = '<i class="fa-solid fa-scissors"></i>';
}

/**
 * Removes computers choice
 */
function removeChoiceAi() {
    computerBox.innerHTML = '<i class="fa-solid fa-question"></i>';
}
/**
 * Removes text from results section after each turn
 */
function removeResults() {
    results.innerHTML = '';
}



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

        }, mainDelay);
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

/**
 * Changes results text to show who won the round
 * calls IncrementPlayerScore() function
 * Checks if playerScore has reached 5 wins
 */
function resultsWin() {
    results.innerHTML = '<h4>You Win!</h4>';
    incrementPlayerScore();
    if (playerScore == 5) {
        gameFinished = true;
        disablePlayerBtns();
        setTimeout(
            function() {
                gameOver(true);
            }, mainDelay
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
        gameFinished = true;
        disablePlayerBtns();
        setTimeout(
            function() {
                gameOver(false);
            }, mainDelay
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


darkModeButton.addEventListener('click', function() {

    if (darkModeButton.innerHTML == '<i class="fa-solid fa-moon"></i>') {
        darkMode();
        darkModeButton.innerHTML = '<i class="fa-solid fa-lightbulb"></i>';
    } else {
        lightMode();
        darkModeButton.innerHTML = '<i class="fa-solid fa-moon"></i>';
    }
});


function darkMode() {
    stylesheet.href = 'assets/css/style2.css';
}

function lightMode() {
    stylesheet.href = 'assets/css/style.css';
}

// Disable multiple clicks on player choices


for (let i = 0; i < playerBtn.length; i++) {

    playerBtn[i].addEventListener('click', function() {
        preventMultipleClicks();
    });
}

function preventMultipleClicks() {
    disablePlayerBtns();

    
    setTimeout(function() {
        enablePlayerBtns();
    }, btnDelay );
}

function disablePlayerBtns() {
    for (let i = 0; i < playerBtn.length; i++) {
        playerBtn[i].disabled = true;
    }
}

function enablePlayerBtns() {
    for (let i = 0; i < playerBtn.length; i++) {
        if (gameFinished == false) {
        playerBtn[i].disabled = false;
        }
    }    
}