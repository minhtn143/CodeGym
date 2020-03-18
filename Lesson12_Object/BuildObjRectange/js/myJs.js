function Rectangle(length, width) {
    this.length = length;
    this.width = width;

    this.getParameter = function () {
        return 2 * (this.length + this.width);
    }

    this.getSquare = function () {
        return this.length * this.width;
    }

    this.drawRectangle = function () {
        var canvas = document.getElementById("myCanvas");
        var ctx = canvas.getContext("2d");
        ctx.fillStyle = "#FF0000";
        ctx.fillRect(0, 0, this.length, this.width);
    }
}

function main() {
    let inputLength = Number.parseInt(document.getElementById("inputlength").value);
    let inputWidth = Number.parseInt(document.getElementById("inputwidth").value);
    let rectangle = new Rectangle(inputLength, inputWidth);
    rectangle.drawRectangle();
    document.getElementById("parameter").innerHTML = "Parameter of Rectangle is: " + rectangle.getParameter();
    document.getElementById("square").innerHTML = "Parameter of Rectangle is: " + rectangle.getSquare();
}

function reset() {
    document.getElementById("inputlength").value = "";
    document.getElementById("inputwidth").value = "";
    document.getElementById("parameter").innerHTML = "";
    document.getElementById("square").innerHTML = "";
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0,0,window.innerWidth,window.innerHeight);
}
