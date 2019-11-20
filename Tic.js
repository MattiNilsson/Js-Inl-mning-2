let boards = document.getElementsByClassName("board");
let showWhichPlayer = document.getElementById("player");
let gameBorder = document.getElementById("gameBorder");

// I've resently heard that variables in the global-scope is a bad practise.
// Will try and refrain from using variables in the global-scope from now on.

//  Variable to determen whos turn it is.
let whichPlayer = "playerOne";

//  Variable to find already occupied markers.
let takenBoards = [];

//  Variable to check who won. (had more use when i first tid the winning conditions I think).
let winnerCheck = [];

//  The infamous string winner variable.
let winner = "";

//  Variable to find out how many moves has been done. Used to determen tie.
let moves = 0;

// Button to activate stupid AI & On or Off for AI
let aiButton = document.getElementById("aiButton");
let aiOn = false;

// Button to reset the game.
let resetBtn = document.getElementById("resetBtn");

if(winner === ""){
    resetBtn.setAttribute("style", "display:none");
}

resetBtn.addEventListener("click", () =>{
    for(let i = 0; i < boards.length; i++){
        if(boards[i].hasChildNodes()){
            boards[i].removeChild(boards[i].firstChild);
        }
        resetBtn.setAttribute("style", "display:none");
        whichPlayer = "playerOne";
        showWhichPlayer.textContent = "Player One's turn"
        gameBorder.setAttribute("style", "border: 4px solid black")
        takenBoards[i] = null;
        winnerCheck[i] = null;
        winner = "";
        moves = 0;
        aiButton.setAttribute("style", "background-color: white;")
    }
})

aiButton.addEventListener("click", () =>{
    aiOn = true;
    aiButton.setAttribute("style", "background-color: rgb(126, 225, 255);")
    for(let i = 0; i < boards.length; i++){
        if(boards[i].hasChildNodes()){
            boards[i].removeChild(boards[i].firstChild);
        }
        resetBtn.setAttribute("style", "display:none");
        whichPlayer = "playerOne";
        showWhichPlayer.textContent = "Player One's turn"
        gameBorder.setAttribute("style", "border: 4px solid black")
        takenBoards[i] = null;
        winnerCheck[i] = null;
        winner = "";
        moves = 0;
    }
});

//  Random Number Generatior which floors the number to become an Int variable.
//  Also regenerates new number if another marker already has it's place.
function getRandomInt(max){
    num = Math.floor(Math.random() * Math.floor(max));
    testNumber = 1;
    for(let i = 0; i < testNumber; i++){
        if(boards[num].id === takenBoards[num] && winner === ""){
            testNumber++
            num = Math.floor(Math.random() * Math.floor(max));
        }else if(boards[num].id !== takenBoards[num] && winner === ""){
            return num;
        }
    }
}

//  loop to place and check where markers are
for(let i = 0; i < boards.length; i++){
    boards[i].addEventListener("mouseup", () =>{
        if(boards[i].id !== takenBoards[i] && winner === ""){
            let newMark = document.createElement("img");
            if(whichPlayer === "playerOne"){
                newMark.src = "./xMark.png";
            }else{
                newMark.src = "./oMark.png";
            }
            boards[i].appendChild(newMark);
            takenBoards[i] = boards[i].id;
            winnerCheck[i] = whichPlayer;
            moves++;
            if(aiOn === false && winner === ""){
                whoToPlay();
            }else if(aiOn === true && winner === "" && moves < 8){
                let RNGnum = getRandomInt(9);
                let AiMark = document.createElement("img");
                AiMark.src = "./oMark.png";
                boards[RNGnum].appendChild(AiMark);
                takenBoards[RNGnum] = boards[RNGnum].id;
                winnerCheck[RNGnum] = "playerTwo";
                moves++;
                winner = check();
                theWinner();
                }
        }else if(boards[i].id === takenBoards[i] && winner === ""){
            alert("Already Taken");
        }
        winner = check();
        theWinner();
    });
}

//  function who switches between different players.
//  Should probably use true or false instead of Strings to determen players.
function whoToPlay(){
    if(whichPlayer === "playerOne"){
        showWhichPlayer.textContent = "Player Two's turn"
        gameBorder.setAttribute("style", "border: 4px solid red")
        return whichPlayer = "playerTwo";
    }else if(whichPlayer === "playerTwo"){
        showWhichPlayer.textContent = "Player One's turn"
        gameBorder.setAttribute("style", "border: 4px solid black")
        return whichPlayer = "playerOne"
    }
}

//  Check for win conditions. Used every time a marker is placed
function check(){
    let winCases = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 4, 8],
        [2, 4, 6],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8]
    ];
    //  loop for player one
    for(let i = 0; i < winCases.length; i++){
        let won = true;
        for(let j = 0; j < winCases[i].length; j++){
            if(winnerCheck[winCases[i][j]] !== "playerOne"){
                won = false;
                break;
            }
        }
        if(won){
            return "playerOne";
        }
    }
    //  loop for player two
    for(let i = 0; i < winCases.length; i++){
        let won = true;
        for(let j = 0; j < winCases[i].length; j++){
            if(winnerCheck[winCases[i][j]] !== "playerTwo"){
                won = false;
                break;
            }
        }
        if(won){
            return "playerTwo";
        }
    }
    return winner;
    
}

//  Displays the winner on screen and also condition for TIE.
function theWinner(){
    if(winner === "" && moves === 9){
        showWhichPlayer.textContent = "IT'S A TIE";
        showWhichPlayer.setAttribute("style", "color : rgb(126, 225, 255);");
        gameBorder.setAttribute("style", "border: 8px solid rgb(126, 225, 255);")
        resetBtn.setAttribute("style", "display:block")
        aiOn = false;
    }

    if(winner === "playerOne"){
        showWhichPlayer.textContent = "Player One Wins";
        gameBorder.setAttribute("style", "border: 8px solid black")
        resetBtn.setAttribute("style", "display:block")
        aiOn = false;
    }else if(winner === "playerTwo"){
        showWhichPlayer.textContent = "Player Two Wins";
        gameBorder.setAttribute("style", "border: 8px solid red")
        resetBtn.setAttribute("style", "display:block")
        aiOn = false;
    }
}
