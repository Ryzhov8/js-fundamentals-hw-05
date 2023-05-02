class Worker {
  #experience;
  static all = [];
  static sortBySalary() {
    const workers = [...Worker.all];
    workers.sort(
      (a, b) => b.showSalaryWithExperience() - a.showSalaryWithExperience()
    );
    workers.forEach((worker) => {
      console.log(`${worker.fullName}: ${worker.showSalaryWithExperience()}`);
    });
  }
  constructor(fullName, dayRate, workingDays) {
    this.fullName = fullName;
    this.dayRate = dayRate;
    this.workingDays = workingDays;
    this.#experience = 1.2;
    Worker.all.push(this);
  }
  showSalary() {
    return this.dayRate * this.workingDays;
  }

  showSalaryWithExperience() {
    return this.showSalary() * this.#experience;
  }

  get experience() {
    return this.#experience;
  }

  set experience(value) {
    this.#experience = value;
  }
}

let worker1 = new Worker("John Johnson", 20, 23);
console.log(worker1.fullName);
console.log(`Salary: ${worker1.showSalary()}`);
console.log(`Experience: ${worker1.experience}`);
console.log(`Salary with experience: ${worker1.showSalaryWithExperience()}`);
worker1.experience = 1.5;
console.log(`New experience: ${worker1.experience}`);
console.log(
  `New salary with experience: ${worker1.showSalaryWithExperience()}`
);

let worker2 = new Worker("Tom Tomson", 48, 22);
console.log(worker2.fullName);
console.log(`Salary: ${worker2.showSalary()}`);
console.log(`Experience: ${worker2.experience}`);
console.log(`Salary with experience: ${worker2.showSalaryWithExperience()}`);
worker2.experience = 1.3;
console.log(`New experience: ${worker2.experience}`);
console.log(
  `New salary with experience: ${worker2.showSalaryWithExperience()}`
);

let worker3 = new Worker("Andy Ander", 29, 23);
console.log(worker3.fullName);
console.log(`Salary: ${worker3.showSalary()}`);
console.log(`Experience: ${worker3.experience}`);
console.log(`Salary with experience: ${worker3.showSalaryWithExperience()}`);
worker3.experience = 1.6;
console.log(`New experience: ${worker3.experience}`);
console.log(
  `New salary with experience: ${worker3.showSalaryWithExperience()}`
);

Worker.sortBySalary();
