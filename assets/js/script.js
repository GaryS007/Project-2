// closeModal allows you to close the Modal when you Start Game

function closeModal() {
    modal.style.display = "none";
}

let modal = document.getElementById("main-modal");
let btn = document.getElementById("modal-button");

btn.addEventListener('click', function() {
    closeModal()
})

// runGame function is designed to implement which choice the player takes.

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
    rockChoice()
})

paper.addEventListener('click', function() {
    paperChoice()
})

scissors.addEventListener('click', function() {
    scissorsChoice()
})
