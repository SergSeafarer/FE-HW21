class Student {
  constructor(name, surname, yearOfBirth, grades) {
    this.name = name;
    this.surname = surname;
    this.yearOfBirth = yearOfBirth;
    this.grades = grades;
  }
  gradesAverage = 0;
  attendance = new Array(25);
  lessonsCompleted = 0;

  calculateAge() {
    const currentYear = 2023;
    console.log('Age of Student: ' + (currentYear - this.yearOfBirth));
  }

  calculateGradesAverage() {
    const gradesSum = this.grades.reduce(function(totalGrades, currentGrade) {
      return totalGrades + currentGrade;
    }, );
    this.gradesAverage = gradesSum / this.grades.length;
    return console.log('Average Grade of Student: ' + this.gradesAverage);
  }

  present() {
    this.lessonsCompleted < this.attendance.length ? this.attendance[this.lessonsCompleted] = 'true' : console.log('No more lessons for this student');
    this.lessonsCompleted++;
    return this;
  }

  absent() {
    this.lessonsCompleted < this.attendance.length ? this.attendance[this.lessonsCompleted] = 'false' : console.log('No more lessons for this student');
    this.lessonsCompleted++;
    return this;
  }

  summary() {
    const attendanceCounter = this.attendance.filter(presence => presence === 'true');
    if(attendanceCounter.length / this.lessonsCompleted < 0.9 && this.gradesAverage < 90) {
      return console.log('Редиска!!!');
    } 
    if(attendanceCounter.length / this.lessonsCompleted < 0.9 || this.gradesAverage < 90) {
      return console.log('Добре, але можна краще');
    }
    if(attendanceCounter.length / this.lessonsCompleted > 0.9 && this.gradesAverage > 90) {
      return console.log('Молодець!!!');
    }
  }
}

const studentMike = new Student('Mike', 'Johnson', 1990, [100, 95, 90, 100, 100]);
studentMike.calculateAge();
studentMike.calculateGradesAverage();
studentMike.present().present().present().present().present();
studentMike.summary();
console.log(studentMike);

console.log('*************************');

const studentOleg = new Student('Oleg', 'Kozak', 1993, [91, 90, 100, 98, 98]);
studentOleg.calculateAge();
studentOleg.calculateGradesAverage();
studentOleg.absent().absent().present().present().absent();
studentOleg.summary();
console.log(studentOleg);

console.log('************************');

const studentSergii = new Student('Sergii', 'Palyanica', 2000, [88, 85, 90]);
studentSergii.calculateAge();
studentSergii.calculateGradesAverage();
studentSergii.absent().absent().absent();
studentSergii.summary();
console.log(studentSergii);
