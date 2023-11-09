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
  }

  absent() {
    this.lessonsCompleted < this.attendance.length ? this.attendance[this.lessonsCompleted] = 'false' : console.log('No more lessons for this student');
    this.lessonsCompleted++;
  }
}