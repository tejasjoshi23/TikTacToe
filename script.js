console.log("Welcome to Tic Tac Toe")
let music = new Audio("music.mp3")
let audioTurn = new Audio("ting.mp3") 
let gameover = new Audio("gameOver.mp3")
let turn = "X"
let gameend = false;

// Function to change the turn
const changeTurn = () => {
    return turn === "X" ? "O" : "X"
}

// Function to check win
const checkWin = () => {
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135],
    ]
    wins.forEach(e => {
        if ((boxtext[e[0]].innerHTML === boxtext[e[1]].innerHTML) &&
            (boxtext[e[2]].innerHTML === boxtext[e[1]].innerHTML) &&
            (boxtext[e[0]].innerHTML !== "")) {
            document.querySelector('.Info').innerText = boxtext[e[0]].innerHTML.includes("X.png") ? "X Won" : "O Won"
            gameend = true;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "150px";
            gameover.play();
        }
    })
}

// Game logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if (boxtext.innerHTML === '') {
            boxtext.innerHTML = `<img src="${turn}.png" alt="${turn}" />`; // Set image based on turn
            turn = changeTurn();
            setTimeout(() => {
                audioTurn.play();
            }, 1);
           
            checkWin();
            if (!gameend) {
                document.getElementsByClassName("Info")[0].innerText = "Turn for " + turn;
            }
        }
    })
})

// Reset button
let reset = document.getElementById('reset'); // Ensure you have an element with id 'reset'
reset.addEventListener('click', () => {
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerHTML = ""
    });
    turn = "X";
    gameend = false
    document.getElementsByClassName("Info")[0].innerText = "Turn for " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px"
})
