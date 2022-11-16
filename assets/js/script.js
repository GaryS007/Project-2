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

let playerBox = document.getElementById('player-choice');

function rockChoice() {
    playerBox.innerHTML = '<i class="fa-solid fa-hand-back-fist"></i>';
}

function paperChoice() {
    playerBox.innerHTML = '<i class="fa-solid fa-paper-plane"></i>';
}

function scissorsChoice() {
    playerBox.innerHTML = '<i class="fa-solid fa-scissors"></i>';
}

let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");


rock.addEventListener('click', function() {
    rockChoice();
    computerChoiceDelay();
})

paper.addEventListener('click', function() {
    paperChoice();
    computerChoiceDelay();
})

scissors.addEventListener('click', function() {
    scissorsChoice();
    computerChoiceDelay();
})


// Computer Choices insert rock/paper/scissors after a 1 second delay

let computerBox = document.getElementById('computer-choice');

function rockChoiceAi() {
    computerBox.innerHTML = '<i class="fa-solid fa-hand-back-fist"></i>';
}

function paperChoiceAi() {
    computerBox.innerHTML = '<i class="fa-solid fa-paper-plane"></i>';
}

function scissorsChoiceAi() {
    computerBox.innerHTML = '<i class="fa-solid fa-scissors"></i>';
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
    setTimeout(computerChoice, 1000);
}