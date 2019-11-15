let boards = document.getElementsByClassName("board");
let playerOneMark = document.getElementById("playerOneMark");
let playerTwoMark = document.getElementById("playerTwoMark");
let showWhichPlayer = document.getElementById("player");
let gameBorder = document.getElementById("gameBorder");
let whichPlayer = "playerOne";
console.log(boards);
let takenBoards = [];


for(let i = 0; i < boards.length; i++){
    boards[i].addEventListener("mouseup", () =>{
        if(boards[i].id !== takenBoards[i]){
            newMark = document.createElement("img");
            if(whichPlayer === "playerOne"){
                newMark.src = playerOneMark.src;
            }else{
                newMark.src = playerTwoMark.src;
            }
            boards[i].appendChild(newMark);
            takenBoards[i] = boards[i].id;
            whoToPlay();
        }else if(boards[i].id === takenBoards[i]){
            alert("Already Taken");
        }
    });
}

function whoToPlay(){
    if(whichPlayer === "playerOne"){
        showWhichPlayer.textContent = "Player Two's turn"
        showWhichPlayer.setAttribute("style", "color : red");
        gameBorder.setAttribute("style", "border: 10px solid red")
        return whichPlayer = "playerTwo";
    }else if(whichPlayer === "playerTwo"){
        showWhichPlayer.textContent = "Player One's turn"
        showWhichPlayer.setAttribute("style", "color : black");
        gameBorder.setAttribute("style", "border: 10px solid black")
        return whichPlayer = "playerOne"
    }
}