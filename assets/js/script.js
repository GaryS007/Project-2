// closeModal allows you to close the Modal when you Start Game

function closeModal() {
    modal.style.display = "none";
}

let modal = document.getElementById("main-modal");
let btn = document.getElementById("modal-button");

btn.addEventListener('click', function() {
    closeModal();
})

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
        }, 500);
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

}

function resultsLose() {
    results.innerHTML = '<h4>You Lose!</h4>';
}

function resultsDraw() {
    results.innerHTML = '<h4>DRAW!</h4>';
}
