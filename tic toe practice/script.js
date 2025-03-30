const boxes = document.querySelectorAll(".box");
const player1 = document.querySelector(".player1");
const player2 = document.querySelector(".player2");
const restart = document.querySelector(".restart-btn");
const alertBox = document.querySelector(".alert-box")

let currentPlayer = "X"
let nextPlayer = "O"
let playerTurn = currentPlayer;

player1.textContent = `Player 1 : ${currentPlayer}`;
player2.textContent = `Player2 : ${nextPlayer} `;

const startgame = () => {
    boxes.forEach(box => {
        box.addEventListener("click",handleClick)
    });
};


const handleClick =(e)=>{
    if (e.target.textContent === '') {
        e.target.textContent = playerTurn;
        if (checkWin()) {
            // console.log(`${playerTurn} is a Winner!`);
            showAlert(`${playerTurn} is a Winner!`)
            disableBoxes();
        }
        else if (checkTie()) {
            // console.log(`it's a Tie!`);
            showAlert(`it's a Tie!`); 
            disableBoxes();
        }
        else {
            changePlayerTurn();
            showAlert(`Turn for Player:${playerTurn}`)
        }
    }
}
const changePlayerTurn = () => {
    if (playerTurn === currentPlayer) {
        playerTurn = nextPlayer
    } else {
        playerTurn = currentPlayer;
    }
}

const checkWin = () => {
    const winningconditions =
        [
            [0, 1, 2],
            [0, 3, 6],
            [0, 4, 8],
            [1, 4, 7],
            [2, 5, 8],
            [2, 4, 6],
            [3, 4, 5],
            [6, 7, 8],
        ];

    for (let i = 0; i < winningconditions.length; i++) {
        const [pos1, pos2, pos3] = winningconditions[i];
        if (boxes[pos1].textContent != "" &&
            boxes[pos1].textContent === boxes[pos2].textContent &&
            boxes[pos2].textContent === boxes[pos3].textContent) {
            return true;
        }
        // console.log(`${pos1} ${pos2} ${pos3}`)
    }
    return false;
};

const checkTie = ()=>{
    let emptyboxes = 0
    boxes.forEach(box=>{
        if(box.textContent===""){
            emptyboxes++;
        }
    });
     return emptyboxes===0 && !checkWin();
}


const restartGame = ()=>{
    boxes.forEach(box=>{
        box.textContent= "" 
        box.classList.remove("disabled")
    });
    startgame();
}
const disableBoxes =()=>{
    boxes.forEach(box=>{
        box.removeEventListener("click",handleClick)
        box.classList.add("disabled");
    });
}
const showAlert = (msg)=>{
    alertBox.style.display = "block";
    alertBox.textContent = msg;
    setTimeout(()=>{
        alertBox.style.display = "none";
    },7000)
}


restart.addEventListener("click",restartGame)
startgame();
