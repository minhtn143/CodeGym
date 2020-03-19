function Student(studentID, firstName, lastName, className, mathScore, phyScore, chemScore) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.studentID = studentID;
    this.className = className;
    this.mathScore = mathScore;
    this.phyScore = phyScore;
    this.chemScore = chemScore;

    this.getStudent = function () {
        return this.studentID;
    }

    this.getAverageScore = function () {
        return (this.mathScore + this.chemScore + this.phyScore) / 3;
    }
    this.show = function () {
        document.write("StudentID: " + this.studentID + "<br>");
        document.write("Name: " + this.lastName + " " + this.firstName + "<br>");
        document.write("Class: " + this.className + "<br>");
        document.write("Math: " + this.mathScore + "<br>");
        document.write("Physical: " + this.phyScore + "<br>");
        document.write("Chemicals: " + this.chemScore + "<br>");
        document.write("Average Score: <b>" + this.getAverageScore() + "</b><br>");
    }
}
const MAX=10;

function StudentList(){
    this.studentList= new Array(MAX);
    this.initStudentList= function() {
        for (let i=0; i<MAX;i++)
        {
            let studentID = "CG_" + i;
            let firstName = Math.random().toString(36).substring(10);
            let lastName = Math.random().toString(36).substring(5);
            let className = "C02020" + Math.random().toString(36).substring(10);
            let mathScore = Math.floor(Math.random()*10);
            let phyScore = Math.floor(Math.random()*10);
            let chemScore = Math.floor(Math.random()*10);

            let student = new Studen(studentID,firstName,lastName,className,mathScore,phyScore,chemScore);
            this.studentList[i]=student;
        }
    }
    this.showStudentList = function() {
        for (let i = 0; i<MAX; i++)
            this.studentList[i].show();
    }
    this.sortStudentList = function() {
        this.studentList.sort(function (sv1,sv2) {
            return sv1.getAverageScore() -sv2.getAverageScore();
        })
    }

}







function main() {
    /*            let studen1 = new Studen("CG_001", "Thuy Linh", "Hoang", "C0202H2", 10, 9, 8);
                let studen2 = new Studen("CG_002", "Hung", "Nguyen", "C0202H2", 7, 3, 9);

                studen1.show();
                studen2.show();*/
    let sList = new StudentList();
    sList.initStudentList();
    sList.showStudentList();
    document.write("===========After sort===========<br>" );
    sList.sortStudentList();
    sList.showStudentList();
}

main();