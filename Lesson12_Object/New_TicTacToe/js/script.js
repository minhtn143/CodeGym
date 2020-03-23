const ROWS = 20;
const COLS = 20;
let myBoard = [];
let drawBoard = "";

function createBoard() {
    for (let i = 0; i < ROWS; i++) {
        myBoard[i] = [];
        for (let j = 0; j < COLS; j++) {
            myBoard[i][j]=".";
            drawBoard += "<div id='location_" + i + "-" + j + "' class='cell'> </div>";
        }
    }
    document.getElementById("container").innerHTML=drawBoard;
}

createBoard();