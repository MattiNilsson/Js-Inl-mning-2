let boards = document.getElementsByClassName("board");
let playerOneMark = document.getElementById("playerOneMark");
let playerTwoMark = document.getElementById("playerTwoMark");
let showWhichPlayer = document.getElementById("player");
let gameBorder = document.getElementById("gameBorder");
let whichPlayer = "playerOne";
console.log(boards);
let takenBoards = [];
let winnerCheck = [];
let winner = "";
let moves = 0;

let resetBtn = document.getElementById("resetBtn");
if(winner === ""){
    resetBtn.setAttribute("style", "display:none");
}

resetBtn.addEventListener("click", () =>{
    console.log(takenBoards)
    for(let i = 0; i < boards.length; i++){
        if(boards[i].hasChildNodes()){
            boards[i].removeChild(boards[i].firstChild);
            console.log("Removed " + boards[i]);
        }
        resetBtn.setAttribute("style", "display:none");
        whichPlayer = "playerOne";
        showWhichPlayer.textContent = "Player One's turn"
        gameBorder.setAttribute("style", "border: 10px solid black")
        takenBoards[i] = null;
        winnerCheck[i] = null;
        winner = "";
        moves = 0;
    }
    console.log(takenBoards);
})

for(let i = 0; i < boards.length; i++){
    boards[i].addEventListener("mouseup", () =>{
        if(boards[i].id !== takenBoards[i] && winner === ""){
            newMark = document.createElement("img");
            if(whichPlayer === "playerOne"){
                newMark.src = playerOneMark.src;
            }else{
                newMark.src = playerTwoMark.src;
            }
            boards[i].appendChild(newMark);
            takenBoards[i] = boards[i].id;
            winnerCheck[i] = whichPlayer;
            moves++;
            whoToPlay();
            check();
            console.log(winnerCheck)
        }else if(boards[i].id === takenBoards[i] && winner === ""){
            alert("Already Taken");
        }
    });
}

function whoToPlay(){
    if(whichPlayer === "playerOne"){
        showWhichPlayer.textContent = "Player Two's turn"
        gameBorder.setAttribute("style", "border: 10px solid red")
        return whichPlayer = "playerTwo";
    }else if(whichPlayer === "playerTwo"){
        showWhichPlayer.textContent = "Player One's turn"
        gameBorder.setAttribute("style", "border: 10px solid black")
        return whichPlayer = "playerOne"
    }
}

function check(){
    if(winnerCheck[0] === "playerOne" &&
    winnerCheck[1] === "playerOne" &&
    winnerCheck[2] === "playerOne"){
        console.log("p1 Wins")
        winner = "playerOne";
    }
    if(winnerCheck[3] === "playerOne" &&
    winnerCheck[4] === "playerOne" &&
    winnerCheck[5] === "playerOne"){
        console.log("p1 Wins")
        winner = "playerOne";
    }
    if(winnerCheck[6] === "playerOne" &&
    winnerCheck[7] === "playerOne" &&
    winnerCheck[8] === "playerOne"){
        console.log("p1 Wins")
        winner = "playerOne";
    }
    if(winnerCheck[0] === "playerOne" &&
    winnerCheck[3] === "playerOne" &&
    winnerCheck[6] === "playerOne"){
        console.log("p1 Wins")
        winner = "playerOne";
    }
    if(winnerCheck[1] === "playerOne" &&
    winnerCheck[4] === "playerOne" &&
    winnerCheck[7] === "playerOne"){
        console.log("p1 Wins")
        winner = "playerOne";
    }
    if(winnerCheck[2] === "playerOne" &&
    winnerCheck[5] === "playerOne" &&
    winnerCheck[8] === "playerOne"){
        console.log("p1 Wins")
        winner = "playerOne";
    }
    if(winnerCheck[0] === "playerOne" &&
    winnerCheck[4] === "playerOne" &&
    winnerCheck[8] === "playerOne"){
        console.log("p1 Wins")
        winner = "playerOne";
    }
    if(winnerCheck[2] === "playerOne" &&
    winnerCheck[4] === "playerOne" &&
    winnerCheck[6] === "playerOne"){
        console.log("p1 Wins")
        winner = "playerOne";
    }

    if(winnerCheck[0] === "playerTwo" &&
    winnerCheck[1] === "playerTwo" &&
    winnerCheck[2] === "playerTwo"){
        console.log("p2 Wins")
        winner = "playerTwo";
    }
    if(winnerCheck[3] === "playerTwo" &&
    winnerCheck[4] === "playerTwo" &&
    winnerCheck[5] === "playerTwo"){
        console.log("p2 Wins")
        winner = "playerTwo";
    }
    if(winnerCheck[6] === "playerTwo" &&
    winnerCheck[7] === "playerTwo" &&
    winnerCheck[8] === "playerTwo"){
        console.log("p2 Wins")
        winner = "playerTwo";
    }
    if(winnerCheck[0] === "playerTwo" &&
    winnerCheck[3] === "playerTwo" &&
    winnerCheck[6] === "playerTwo"){
        console.log("p2 Wins")
        winner = "playerTwo";
    }
    if(winnerCheck[1] === "playerTwo" &&
    winnerCheck[4] === "playerTwo" &&
    winnerCheck[7] === "playerTwo"){
        console.log("p2 Wins")
        winner = "playerTwo";
    }
    if(winnerCheck[2] === "playerTwo" &&
    winnerCheck[5] === "playerTwo" &&
    winnerCheck[8] === "playerTwo"){
        console.log("p2 Wins")
        winner = "playerTwo";
    }
    if(winnerCheck[0] === "playerTwo" &&
    winnerCheck[4] === "playerTwo" &&
    winnerCheck[8] === "playerTwo"){
        console.log("p2 Wins")
        winner = "playerTwo";
    }
    if(winnerCheck[2] === "playerTwo" &&
    winnerCheck[4] === "playerTwo" &&
    winnerCheck[6] === "playerTwo"){
        console.log("p2 Wins")
        winner = "playerTwo";
    }

    if(winner === "" && moves === 9){
        showWhichPlayer.textContent = "IT'S A TIE";
        showWhichPlayer.setAttribute("style", "color : White");
        gameBorder.setAttribute("style", "border: 20px solid White")
        resetBtn.setAttribute("style", "display:block")
    }

    if(winner === "playerOne"){
        showWhichPlayer.textContent = "Player One Wins";
        gameBorder.setAttribute("style", "border: 20px solid black")
        resetBtn.setAttribute("style", "display:block")
    }else if(winner === "playerTwo"){
        showWhichPlayer.textContent = "Player Two Wins";
        gameBorder.setAttribute("style", "border: 20px solid red")
        resetBtn.setAttribute("style", "display:block")
    }
}

