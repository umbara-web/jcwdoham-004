class Employee {
  constructor(name) {
    this.name = name;
    this.hoursWorked = 0;
  }

  addHours(hours) {
    this.hoursWorked += hours;
  }

  calculateTotalSalary() {
    console.log('This method should be overridden by a child class.');
    return 0;
  }

  getDetails() {
    return `${this.name} (${this.constructor.name}): worked ${
      this.hoursWorked
    } hours. Total Salary: Rp ${this.calculateTotalSalary().toLocaleString(
      'id-ID'
    )}`;
  }
}

class FulltimeEmployee extends Employee {
  constructor(name) {
    super(name);
    this.baseRate = 100000;
    this.overtimeRate = 75000;
  }

  calculateTotalSalary() {
    let totalSalary = 0;

    if (this.hoursWorked > 6) {
      const regularHours = 6;
      const overtimeHours = this.hoursWorked - regularHours;
      totalSalary =
        regularHours * this.baseRate + overtimeHours * this.overtimeRate;
    } else {
      totalSalary = this.hoursWorked * this.baseRate;
    }
    return totalSalary;
  }
}

class ParttimeEmployee extends Employee {
  constructor(name) {
    super(name);
    this.baseRate = 50000;
    this.overtimeRate = 30000;
  }

  calculateTotalSalary() {
    let totalSalary = 0;

    if (this.hoursWorked > 6) {
      const regularHours = 6;
      const overtimeHours = this.hoursWorked - regularHours;
      totalSalary =
        regularHours * this.baseRate + overtimeHours * this.overtimeRate;
    } else {
      totalSalary = this.hoursWorked * this.baseRate;
    }
    return totalSalary;
  }
}

const fulltimeStaff = new FulltimeEmployee('Budi');
const parttimeStaff = new ParttimeEmployee('Siti');

fulltimeStaff.addHours(8);

parttimeStaff.addHours(7);

console.log(fulltimeStaff.getDetails());
console.log(parttimeStaff.getDetails());
