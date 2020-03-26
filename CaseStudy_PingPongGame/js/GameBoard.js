const HEIGHT = 600;
const WIDTH = 960;

const c = document.getElementById("myCanvas");
const ctx = c.getContext("2d");

class Table {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    drawRectangle(xPosition, yPosition, width, height, color) {
        ctx.fillStyle = color;
        ctx.fillRect(xPosition, yPosition, width, height);
    }

    drawNet(xPosition, yPosition, width, height, color) {
        for (let i = 0; i <= HEIGHT; i += 25) {
            this.drawRectangle(xPosition, yPosition + i, width, height, color)
        }
    }

    drawPoint(text,x,y){
        ctx.fillStyle = "White";
        ctx.font = "60px fantasy";
        ctx.fillText(text,x,y);
    }


}






