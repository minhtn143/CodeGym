const BALL_SIZE = 15;
const BALL_SPEED= 6;

class Ball {
    constructor(xPosition, yPosition) {
        this.size = BALL_SIZE;
        this.speed = BALL_SPEED;
        this.xPosition = xPosition;
        this.yPostion = yPosition;
        this.velocityX = this.speed;
        this.velocityY = this.speed;
        this.directionX = 1;
        this.directionY = 1;
        this.color = "white";
    }

    drawBall() {
        ctx.fillStyle = "white";
        ctx.beginPath();
        ctx.arc(this.xPosition, this.yPostion, this.size, 0, Math.PI * 2, false);
        ctx.closePath();
        ctx.fill();
    }

    setDirectVelocityX() {
        this.directionX = -this.directionX;
    }

    setDirectVelocityY() {
        this.directionY = -this.directionY;
    }

    runBall() {
        this.xPosition += this.velocityX * this.directionX;
        this.yPostion += this.velocityY * this.directionY;
    }
    isCollisionWall() {
        let isCollisionWall = false;
        if (ball.ballTop() < 0 || ball.ballBottom() > TABLE_HEIGHT)
            isCollisionWall = true;
        return isCollisionWall;
    }
    ballTop() {
        return this.yPostion - this.size;
    }
    ballBottom() {
        return this.yPostion + this.size;
    }
    ballLeft() {
        return this.xPosition - this.size;
    }
    ballRight() {
        return this.xPosition + this.size;
    }
    //check ball ở trong bàn
    isOnTable() {
        return this.ballLeft() > 0 && this.ballRight() < TABLE_WIDTH;
    }
    //check bóng va chạm với paddle
    isCollisionPlayer(player) {
        if (this.isOnTable()) {
            return player.playerTop() < this.ballBottom()
                && player.playerBottom() > this.ballTop()
                && player.playerLeft() < this.ballRight()
                && player.playerRight() > this.ballLeft();
        }
    }

    checkCollisionPlayer(player) {
        if (this.isCollisionPlayer(player)) {
            this.changeAngle(player);
            this.changeSpeed();
        }
        return true;
    }

    changeAngle(player){
        let collidePoint = (this.yPostion - (player.yPosition + player.height / 2));
        collidePoint = collidePoint / (player.height / 2);
        let angleRadian = (Math.PI / 4) * collidePoint;
        this.setDirectVelocityX();
        this.velocityY = this.speed * Math.sin(angleRadian);
    }
    changeSpeed() {
        this.speed = Math.random() * 11 + BALL_SPEED;
    }
}

