let playerName = prompt("Enter your name: ");
let player1 = new Player(playerName, PLAYER_X_POSITION, PLAYER_Y_POSITION, PLAYER_WIDTH, PLAYER_HEIGHT, "red");
let com = new Player("COM", TABLE_WIDTH - PLAYER_X_POSITION, PLAYER_Y_POSITION, PLAYER_WIDTH, PLAYER_HEIGHT, "yellow");
let table = new Table(TABLE_HEIGHT, TABLE_WIDTH);
let ball = new Ball(TABLE_WIDTH / 2, TABLE_HEIGHT / 2);


function createGame() {

    table.drawRectangle(TABLE_X_POSITION, TABLE_Y_POSITION, TABLE_WIDTH, TABLE_HEIGHT, TABLE_COLOR);
    table.drawNet(TABLE_WIDTH / 2, 0, NET_WIDTH, NET_HEIGHT, NET_COLOR);
    table.drawPoint(player1.point, POINT_X_POSITION, POINT_Y_POSITION, "red");
    table.drawPoint(com.point, TABLE_WIDTH - POINT_X_POSITION, POINT_Y_POSITION, "yellow");

    player1.drawPlayer(table);
    com.drawPlayer(table);
    ball.drawBall();
}


//Di chuyển paddle
//Di chuyển bằng keyboard
window.addEventListener("keydown", move);

function move(evt) {
    console.log(evt.key);
    switch (evt.key) {
        case "ArrowDown":
                player1.moveDown();
            break;
        case "ArrowUp":
                player1.moveUp();
            break;
    }
}


//Di chuyển bằng chuột
canvas.addEventListener("mousemove", getMousePos);

function getMousePos(evt) {
    let rect = canvas.getBoundingClientRect();
        player1.yPosition = evt.clientY - rect.top - player1.height / 2;
}

//Check chạm tường hai trên dưới thì bật lại
function checkCollisionWall() {
    if (ball.isCollisionWall()) {
        ball.setDirectVelocityY();
    }
    return true;
}


//check bóng bay ra ngoài bàn
function checkOut(player1, player2) {
    if (ball.isOnTable() === false) {
        if (ball.xPosition - ball.size < TABLE_WIDTH / 2)
            player2.hitPoint();
        else
            player1.hitPoint();
        resetPosition();
    }
}

//check phần side của bên nào
function checkSide() {
    if (ball.xPosition - ball.size < TABLE_WIDTH / 2)
        return player1;
    if (ball.xPosition + ball.size > TABLE_WIDTH / 2)
        return com;
}

//trả lại về vị trí ban đầu
function resetPosition() {
    ball.changeSpeed();
    ball.xPosition = TABLE_WIDTH / 2;
    ball.yPostion = TABLE_HEIGHT / 2;
    ball.setDirectVelocityX();
    ball.velocityY = ball.speed * Math.random();
    player1.xPosition = PLAYER_X_POSITION;
    player1.yPosition = PLAYER_Y_POSITION;
    com.xPosition = TABLE_WIDTH - PLAYER_X_POSITION;
    com.yPosition = PLAYER_Y_POSITION;
}

//Com tự di chuyển
function comAi() {
    // if (com.playerTop() >= 0 || com.playerBottom() <= TABLE_HEIGHT)
        com.yPosition += ((ball.yPostion - (com.yPosition + com.height / 2)))
            * AI_LEVEL;
}
//check điều kiện thắng
function checkWin(player, com) {
    if (player.point === WIN_POINT) {
        alert(player.name + " IS WINNER");
        isGameOver = false;
    }
    if (com.point === WIN_POINT) {
        alert(com.name + " IS WINNER");
        isGameOver = false;
    }
}


function update() {
    checkWin(player1, com);
    comAi();
    ball.checkCollisionPlayer(checkSide());
    checkCollisionWall();
    checkOut(player1, com);
    ball.runBall();
}

function runningGame() {
    if (isGameOver){
        update();
        createGame();
        requestAnimationFrame(runningGame)
    }
}

function restart() {
    location.reload();
}
function start() {

    if (confirm("ARE YOU READY??"))
        runningGame();
}

start();


