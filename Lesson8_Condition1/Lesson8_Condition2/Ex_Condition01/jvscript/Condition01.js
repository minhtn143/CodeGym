function actionBai1() {
    let a = document.getElementById("input_bai1A").value;
    let b = document.getElementById("input_bai1B").value;
    if (a % b === 0)
        alert("A chia hết cho B!!!");
    else
        alert("A không chia hết cho B");
}

function actionBai2() {
    let age= Number.parseInt(document.getElementById("input_bai2").value) ;
    if (age<15)
        console.log("Không đủ tuổi!");
    else
        console.log("Đủ tuổi");
}
function actionBai3() {
    let number1= +prompt("Enter 1 number: ") ;
    if (number1<0)
        alert("Số này nhỏ hơn 0");
    else if (number1>0)
        alert("Số này lớn hơn 0");
    else
        alert("Không!");
}

function actionBai4() {
    let number1 = +prompt("Enter number 1: ");
    let number2 = +prompt("Enter number 2: ");
    let number3 = +prompt("Enter number 3: ");
    let max= number1;
    let compareNumber = [number1,number2,number3];

    for (let i=0; i<3; i++){
        if (compareNumber[i]>max)
            max=compareNumber[i];
    }

    alert("Max is: "+ max);
}

function actionBai5() {
    let diemKT = Number.parseFloat(document.getElementById("input_bai5A").value);
    let diemGiuaKy = Number.parseFloat(document.getElementById("input_bai5B").value);
    let diemCuoiKy = Number.parseFloat(document.getElementById("input_bai5C").value);
    let avg = (diemKT+diemGiuaKy+diemCuoiKy)/3;
    console.log(diemKT,diemGiuaKy,diemCuoiKy, avg);

    if (diemKT > 10 || diemKT < 0 || diemGiuaKy < 0 || diemGiuaKy > 10 || diemCuoiKy < 0 || diemCuoiKy > 10)
        alert("Điểm số sai! Đề nghị kiểm tra và nhập lại!");
    else{
        if (avg <= 5)
            alert("Học sinh kém!");
        else
        if (avg <= 8)
            alert("Học sinh khá!");
        else
            alert("Học sinh giỏi!");
    }
}


function actionBai6() {
    let sales= +prompt("Enter sales: ");
    let rate = 0.1;
    let commission = sales*rate;
    if (sales<1000)
        alert("Commission is: " + commission + "$");
    else if (sales<5000){
        rate = 0.2;
        commission = sales * rate;
        alert("Commission is: " + commission + "$");
    }
    else {
        rate = 0.3;
        commission = sales * rate;
        alert("Commission is: " + commission + "$");
    }
}