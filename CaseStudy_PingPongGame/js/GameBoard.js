// thông số cài đặt table
const TABLE_HEIGHT = 600;
const TABLE_WIDTH = 960;
const TABLE_X_POSITION = 0;
const TABLE_Y_POSITION = 0;
const TABLE_COLOR = "blue";

//thông số cài đặt Net
const NET_WIDTH = 5;
const NET_HEIGHT = 9;
const NET_COLOR = "white";

//thông số bảng điểm Point
const POINT_X_POSITION = 100;
const POINT_Y_POSITION = 80;

let isGameOver = true;
const WIN_POINT = 3;
const AI_LEVEL = Math.random()/15; //Higher is more slower

const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

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
        for (let i = 0; i <= TABLE_HEIGHT; i += 25) {
            this.drawRectangle(xPosition, yPosition + i, width, height, color)
        }
    }

    drawPoint(text,x,y,color){
        ctx.fillStyle = color;
        ctx.font = "60px fantasy";
        ctx.fillText(text,x,y);
    }
}








