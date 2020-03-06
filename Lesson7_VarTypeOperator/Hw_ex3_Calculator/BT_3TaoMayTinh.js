    let num1, num2;
    num1 = document.getElementById('Num1');
    num2 = document.getElementById('Num2');
    function reset() {
        document.getElementById('result').innerHTML ="";
        document.getElementById('Num1').value ="";
        document.getElementById('Num2').value ="";
    }
    function fAdd() {
        let sum1 = parseFloat(num1.value) + parseFloat(num2.value);
        console.log(sum1);
        document.getElementById('result').innerHTML ="Result Addition: " + sum1;
        document.getElementById("bReset").style="inline";
}
function fSub() {
        let sub1 = parseFloat(num1.value)-parseFloat(num2.value);
        console.log(sub1);
        document.getElementById('result').innerHTML ="Result Subtraction: " + sub1;
}
function fMulti() {
        let multi1 = parseFloat(num1.value)*parseFloat(num2.value);
        console.log(multi1);
        document.getElementById('result').innerHTML ="Result Multiplication: " + multi1;
}
function fDivision() {
        let div1 = parseFloat(num1.value)/parseFloat(num2.value);
        console.log(div1);
        document.getElementById('result').innerHTML ="Result Division: " + div1;
    }



