function Temperature(temp) {
    this.temp=temp;

    this.changeTempK = function () {
      return temp+273.15;
    };

    this.changeTempF = function () {
        return (temp *1.8)+32;
    }
}

let temp = new Temperature(25);
    document.getElementById("changeToF").innerHTML= temp.changeTempF();
    document.getElementById("changeToK").innerHTML= temp.changeTempK();