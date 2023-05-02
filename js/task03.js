class Person {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }
  showFullName() {
    return `${this.surname} ${this.name}`;
  }
}

class Student extends Person {
  constructor(name, surname, year) {
    super(name, surname);
    this.year = year;
  }

  showFullName(midleName) {
    return ` ${this.surname} ${this.name} ${midleName}`;
  }

  showCourse() {
    const date = new Date();
    const currentYear = date.getFullYear();
    return currentYear - this.year;
  }
}
