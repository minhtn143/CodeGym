let table = new Table(HEIGHT, WIDTH);
let player1 = new Player("MINH", 15, HEIGHT / 2, 20, 150, "red");
let com = new Player("COM", WIDTH - 40, HEIGHT / 2, 20, 150, "yellow");
let ball = new Ball(WIDTH / 2, HEIGHT / 2);
let up = document.getElementById("buttonUp");
let down = document.getElementById("buttonDown");
let upInterval = {}, downInterval = {};
let isGameOver = false;
const WINPOINT = 20;
let ComAiLevel = 30;

function createGame() {


    table.drawRectangle(0, 0, WIDTH, HEIGHT, "blue");
    table.drawNet(WIDTH / 2, 0, 5, 15, "white");
    table.drawPoint(player1.point, 100, 80);
    table.drawPoint(com.point, WIDTH - 100, 80);


    player1.drawPlayer(table);
    com.drawPlayer(table);

    ball.drawBall();
}

//Di chuyển paddle
window.addEventListener("keydown", move);

function move(evt) {
    console.log(evt.key);
    switch (evt.key) {
        case "ArrowDown":
            if (player1.playerBottom() < HEIGHT)
                player1.moveDown();
            break;

        case "ArrowUp":
            if (player1.playerTop() > 0)
                player1.moveUp();
            break;
    }
}

//Check chạm tường hai trên dưới thì bật lại
function checkCollisionWall() {
    if (ball.isCollisionWall()) {
        ball.setDirectVelocityY();
    }
    return true;
}


//check bóng bay ra ngoài bàn
function checkOut(player) {
    if (ball.isOnTable() === false) {
        player.hitPoint();
        resetBall();
    }
}

//check phần side của bên nào
function checkSide() {
    if (ball.xPosition - ball.size < WIDTH / 2)
        return player1;
    if (ball.xPosition + ball.size > WIDTH / 2)
        return com;
}

//trả bóng lại về đầu bàn
function resetBall() {
    ball.changeSpeed();
    ball.xPosition = WIDTH / 2;
    ball.yPostion = HEIGHT / 2;
    ball.setDirectVelocityX();
    ball.velocityY = ball.speed * Math.random();
}

function controlButtonUp() {
    up.onmousedown = function () {
        upInterval = setInterval(function () {
            player1.moveUp();
        }, 50);
    };
    up.onmouseup = function () {
        clearInterval(upInterval);
    }
}

function controlButtonDown() {
    down.onmousedown = function () {
        downInterval = setInterval(function () {
            player1.moveDown();
        }, 50);
    };
    down.onmouseup = function () {
        clearInterval(downInterval);
    }
}

function control() {
    controlButtonUp();
    controlButtonDown()
}

function comAi() {
    if (com.playerTop() >= 0 || com.playerBottom() <= HEIGHT)
        com.yPosition += ((ball.yPostion - (com.yPosition + com.height / 2)))
            * Math.random() / ComAiLevel;
}

function checkWin(player1, com) {
    if (player1.point === WINPOINT || com.point === WINPOINT) {
        alert("GAME OVER");
        return true;
    } else return false;
}

function gameOver() {
    if (checkWin())
        isGameOver = true;
    return isGameOver;
}

function update() {
    checkWin(player1, com);
    comAi();
    checkCollisionWall();
    ball.checkCollisionPlayer(checkSide());
    checkOut(checkSide());

    ball.runBall();
}

function startGame() {
    update();
    createGame();
    requestAnimationFrame(startGame)
}

do startGame();
while (gameOver());


