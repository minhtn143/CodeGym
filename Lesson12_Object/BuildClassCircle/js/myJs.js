let Circle = function (radius) {
    this.radius = radius;

    this.getRadius =function () {
        return radius;
    };
    this.getArea = function () {
        return Math.PI* radius*radius;
    };
};

let circle = new Circle(2);
let radius= circle.getRadius();
let area = circle.getArea();

alert("radius:" + radius+ "; area: "+ area);

circle = new Circle(5);
radius= circle.getRadius();
area = circle.getArea();
alert("radius:" + radius+ "; area: "+ area);