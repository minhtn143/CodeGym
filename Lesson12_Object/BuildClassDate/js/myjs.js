let MyDate = function (day, month, year) {
    this.day = day;
    this.month = month;
    this.year = year;

    this.getDay = function () {
        return this.day;
    }
    this.getMonth = function () {
        return this.month;
    }
    this.getYear = function () {
        return this.year;
    }

    this.setDay = function (day) {
        this.day = day;
    }
    this.setMonth = function (month) {
        this.month = month;
    }
    this.setYear = function (year) {
        this.year = year;
    }
    this.setDate = function (day,month,year) {
        this.day=day;
        this.month = month;
        this.year = year;
    }
    this.toString = function () {
        let str = this.day+"/"+this.month+ "/"+ this.year;
        return str;
    }
};
let date = new MyDate(2, 2, 2007);
let day = date.getDay(); // 2
let month = date.getMonth(); // 2
let year = date.getYear(); // 2007

alert(day + "/" + month + "/" + year);

date.setDay(10);
date.setMonth(10);
date.setYear(2019);

alert(date.getDay() + "/" + date.getMonth() + "/" + date.getYear());

date.setDate(14,3,2020);
alert(date.toString());