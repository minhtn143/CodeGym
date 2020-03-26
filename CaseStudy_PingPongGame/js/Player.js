const PLAYER_SPEED = 15;
const ORIENTATION_UP = "up";
const ORIENTATION_DOWN = "down";

class Player {
    constructor(name, xPosition, yPosition, width, height, color) {
        this.name = name;
        this.xPosition = xPosition;
        this.yPosition = yPosition;
        this.width = width;
        this.height = height;
        this.color = color;
        this.point = 0;
        this.orientation= ORIENTATION_DOWN;

    }
    drawPlayer(table){
        table.drawRectangle(this.xPosition,this.yPosition, this.width, this.height,this.color);
    }

    updatePostion(newY) {
        this.yPosition = newY;
    }

    moveUp() {
        this.yPosition -= PLAYER_SPEED;
    }

    moveDown() {
        this.yPosition += PLAYER_SPEED;
    }

    hitPoint (){
        this.point++;
    }
    playerTop(){
        return this.yPosition;
    }
    playerBottom(){
        return this.yPosition + this.height;
    }
    playerLeft(){
        return  this.xPosition;
    }
    playerRight(){
        return  this.xPosition + this.width;
    }

}


