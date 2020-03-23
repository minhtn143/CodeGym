let drawTable = "<table border='1px'>";
let myBoard = [];
let PLAYED = 1;
let isGameOver = false;

function createBoard() {
    nRow = +prompt("Enter Row:");
    nColumn = +prompt("Enter Column:");

    if (nRow < 5 || nColumn < 5) {
        alert("Number of Row and Column must be gearter than 5");
    } else {
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
    if (isGameOver) {
        return
    }

    if (!cell.innerHTML) {
        switch (PLAYED) {
            case 1:
                myBoard[x][y] = "X";
                PLAYED = 2;
                cell.innerHTML = "X";
                break;
            case 2:
                myBoard[x][y] = "O";
                PLAYED = 1;
                cell.innerHTML = "O";
                break;
        }
        checkWin(cell, x, y);
    }
    // kiem tra dieu kien thang

}

function checkWin(cell, x, y) {

    checkRow(cell, x, y);
    checkColumn(cell, x, y);
    checkDiagonalLinesRight(cell, x, y);
    checkDiagonalLinesLeft(cell, x, y);
    if (isGameOver) {
        alert("GAME OVER");
    }

}

function checkRow(cell, x, y) {
    let i = 1;
    let j = 1;
    let count = 1;
    while ((y + i) < nColumn && myBoard[x][y + i] === cell.innerHTML) {
        i++;
        count++;
    }
    while ((y - j) >= 0 && myBoard[x][y - j] === cell.innerHTML) {
        j++;
        count++;
    }
    gameOver(count);
    console.log("ngang" + count);
}

function checkColumn(cell, x, y) {
    let i = 1;
    let j = 1;
    let count = 1;
    while ((x + i) < nRow && myBoard[x + i][y] === cell.innerHTML) {
        i++;
        count++;
    }
    while ((x - j) >= 0 && myBoard[x - j][y] === cell.innerHTML) {
        j++;
        count++;
    }
    gameOver(count);
    console.log("doc" + count);
}

function checkDiagonalLinesRight(cell, x, y) {
    let i = 1;
    let j = 1;
    let count = 1;
    while ((x + i) < nRow && (y + i) < nColumn && (myBoard[x + i][y + i] === cell.innerHTML)) {
        i++;
        count++;
    }
    // gameOver(count);

    while ((x - j) >= 0 && (y - j) >= 0 && (myBoard[x - j][y - j] === cell.innerHTML)) {
        j++;
        count++;
    }
    gameOver(count);
    console.log("phai" + count);
}

function checkDiagonalLinesLeft(cell, x, y) {
    let i = 1;
    let j = 1;
    let count = 1;
    while ((x + i) < nRow && (y - i) >= 0 && (myBoard[x + i][y - i] === cell.innerHTML)) {
        i++;
        count++;
    }
    // gameOver(count);

    while ((x - j) >= 0 && (y + j) <= nColumn && (myBoard[x - j][y + j] === cell.innerHTML)) {
        j++;
        count++;
    }
    gameOver(count);

    console.log("trai" + count);
}

function gameOver(count) {
    if (count >= 5) {
        isGameOver = true;
        return true;
    }

}

createBoard();

