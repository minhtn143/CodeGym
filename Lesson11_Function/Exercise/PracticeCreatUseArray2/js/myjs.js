function main() {
    let inputNum = +prompt("Please enter number: ");
    document.getElementById("SquareNumber").innerHTML = "Square of " + inputNum +
        " is " + squareNumber(inputNum);
}

//Hàm tính bình phương một số
function squareNumber(n) {
    let nSquare = Number.parseFloat(n) ** 2;
    return nSquare;
}

//Hàm tính diện tích, chu vi hình tròn
function calPerimeterCircle(r) {
    let perimeterCircle = 2 * Math.PI * r;
    return perimeterCircle;
}

function calSquareCircle(r) {
    let SquareCircle = squareNumber(calPerimeterCircle(r)) / (4 * Math.PI);
    return SquareCircle;
}

function calCircle(r) {
    document.getElementById("PerimeterCircle").innerHTML = "Perimeter of Circle= " + calPerimeterCircle(r);
    document.getElementById("SquareCircle").innerHTML = "Square of Circle= " + calSquareCircle(r);
}

//Viết hàm tính giai thừa của một số nguyên bất kỳ
function calFactorial(n) {
    if (n === 1)
        return n;
    else
        return n * calFactorial(n - 1);
}

function runFactorial(n) {
    if (n <= 0)
        alert("Try again!");
    document.getElementById("exercise3").innerHTML = "Factorial is: " + calFactorial(n);

}

//Viết hàm kiểm tra ký tự số không?
function checkNumber(n) {
    let n1 = Number.parseFloat(n);
    console.log(Number.isNaN(n1));
    console.log(n1);
    if (Number.isNaN(n1)) {
        alert("It is not NUMBER!");
    } else
        alert("It is NUMBER!")
}

//Viết hàm nhận 3 số nguyên bất kỳ, trả về số nguyên có giá trị nhỏ nhất
function compare3number() {
    let inputNumber1 = +prompt("Enter number 1: ");
    let inputNumber2 = +prompt("Enter number 2: ");
    let inputNumber3 = +prompt("Enter number 3: ");
    let newMyArray = [inputNumber1, inputNumber2, inputNumber3];
    let Max = Math.max.apply(null, newMyArray);
    document.getElementById('exercise5').innerHTML = "Max is: " + Max;
}

//Viết hàm kiêm tra số nguyên dương
function checkInteger() {
    let inputNumber = +prompt("Enter number: ");
    if (Number.isInteger(inputNumber) && inputNumber > 0)
        alert("TRUE");
    else
        alert("FALSE");
}

//Viết hàm đỗi chỗ 2 số nguyên bất kỳ

function swap2number(a, b) {
    let newArray = [a, b];
    let temp = newArray[0];
    newArray[0] = newArray[1];
    newArray[1] = temp;
    return newArray;
}

function runEx7() {
    let number1 = document.getElementById("inputNumberA").value;
    let number2 = document.getElementById("inputNumberB").value;

    number1 = Number.parseInt(number1);
    number2 = Number.parseInt(number2);
    document.getElementById("ex7").innerHTML = "Number 1,2 is: " + number1 + " , " + number2;
    document.getElementById("ex7_1").innerHTML = "Number 1,2 is: " + swap2number(number1, number2);
}

function runEx8() {
    let arrayEx8 = [];
    for (let i = 0; i < 10; i++) {
        arrayEx8.push(Math.floor(Math.random() * 100))
    }
    document.getElementById("ex8").innerHTML = "First Array is: " + arrayEx8;
    let revArrayEx8 = arrayEx8.reverse();
    document.getElementById("ex8_1").innerHTML = "Second Array is: " + revArrayEx8;
}

function runEx9() {
    let inputCharacter = document.getElementById("inputEx9").value;
    let randomArray= [];
    let len=20;
    let count=0;
    let position=[];
    for (let i=0; i<len;i++){
        randomArray[i]=Math.random().toString(36).substring(2,3);
    }
    document.getElementById("ex9").innerHTML = "Random Array is: " + randomArray;
    for (let i= 0;i<len;i++){
        if (inputCharacter==randomArray[i]){
            count++;
            position.push(i);
        }
    }
    if (count===0){
        alert("-1 Not Found!");
    }
    else {
        document.getElementById("ex9_1").innerHTML="Find " + inputCharacter +
            "in random array " + count + " times at position " + position;
    }
}
