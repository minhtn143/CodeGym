let drawTable = "<table border='1px'>";
let myBoard = [];
let PLAYED = 0;
let isGameOver = false;

function creatBoard() {
    nRow = +prompt("Enter Row:");
    nColumn = +prompt("Enter Column:");

    if (nRow<5||nColumn<5){
        alert("Number of Row and Column must be gearter than 5");
    }
    else {
        let i, j;

        for (i = 0; i < nRow; i++) {
            myBoard[i] = [];
            drawTable += "<tr>";
            for (j = 0; j < nColumn; j++) {
                myBoard [i][j] = "*";
                drawTable += '<td id="location_"' + i + ',' + j + ' onclick="play(this,' + i + ',' + j + ')">';
                drawTable += "</td>";
            }
            drawTable += "</tr>";
        }
        document.write(drawTable);
    }
}
//choi
function play(cell, x, y) {
    if (!cell.innerHTML) {
        switch (PLAYED) {
            case 1:
                myBoard[x][y] = "X";
                PLAYED = 2;
                cell.innerHTML = "X";
                break;
            case 2:
                myBoard[x][y] = "";
                PLAYED = 1;
                cell.innerHTML = "O";
                break;
            default:
                myBoard[x][y] = "X";
                PLAYED = 2;
                cell.innerHTML = "X";
                break;
        }
    }
   // kiem tra dieu kien thang
    checkWin(cell,x,y);
}

function checkWin(cell,x,y){
    checkRow(cell,x,y);
    checkColumn(cell,x,y);

}

function checkRow(cell,x,y) {
    let i=1;
    let j=1;
    let count=1;
    while ((y+i)<nColumn&&myBoard[x][y+1]===cell.innerHTML){
        i++;
        count++;
    }
    while ((y-j)>=0 && myBoard[x][y-j]===cell.innerHTML){
        j++;
        count++;
    }
    gameOver(count);
}

function checkColumn(cell,x,y) {
    let i=1;
    let j=1;
    let count=1;
    while ((x+i)<nRow&&myBoard[x+1][y]===cell.innerHTML){
        i++;
        count++;
    }
    while ((x-j)>=0 && myBoard[x-1][y]===cell.innerHTML){
        j++;
        count++;
    }
    gameOver(count);
}

function checkDiagonalLines(cell,x,y) {


}

function gameOver(count) {
    if (count===5){
        alert("GAME OVER");
        isGameOver = true;
    }

}

creatBoard();

