class Ball {
    constructor(xPosition, yPosition) {
        this.size = 15;
        this.speed = 5;
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
        if (ball.ballTop() < 0 || ball.ballBottom() > HEIGHT)
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

    isCollisionPlayer(player) {
        if (this.isOnTable()) {
                return player.playerTop() < this.ballBottom()
                    && player.playerBottom() > this.ballTop()
                    && player.playerLeft() < this.ballRight()
                    && player.playerRight() > this.ballLeft();
        }

    }

    isOnTable() {
        return this.ballLeft() > 0 && this.ballRight() < WIDTH;
    }

    checkCollisionPlayer(player) {
        if (this.isCollisionPlayer(player)){
            let collidePoint = (this.yPostion- (player.yPosition+player.height/2));
            collidePoint = collidePoint/(player.height/2);
            let angleRadian = (Math.PI/4) * collidePoint;
            this.setDirectVelocityX();
            // this.velocityX = this.speed * Math.cos(angleRadian);
            this.velocityY = this.speed * Math.sin(angleRadian);
            this.changeSpeed();
        }
        return true;
    }


    changeSpeed() {
        this.speed = Math.random()*10+5;
    }


}

