class Employee {
  name: string;
  workingHours: number;

  constructor(name: string) {
    this.name = name;
    this.workingHours = 0;
  }

  addWorkingHours(hours: number): void {
    if (hours > 0) {
      this.workingHours = hours;
    } else {
      console.log('Working hours must be greater than 0');
    }
  }

  getWorkingHours(): number {
    return this.workingHours;
  }

  calculateSalary(): number {
    throw new Error("Method 'calculateSalary()' must be implemented.");
  }
}

class FulltimeEmployee extends Employee {
  constructor(name: string) {
    super(name);
  }

  calculateSalary(): number {
    const regularHours = Math.min(this.workingHours, 6);
    const overtimeHours = Math.max(this.workingHours - 6, 0);

    const regularRate = 100000;
    const overtimeRate = 75000;

    return regularHours * regularRate + overtimeHours * overtimeRate;
  }
}

class ParttimeEmployee extends Employee {
  constructor(name: string) {
    super(name);
  }

  calculateSalary(): number {
    const regularHours = Math.min(this.workingHours, 6);
    const overtimeHours = Math.max(this.workingHours - 6, 0);

    const regularRate = 50000;
    const overtimeRate = 30000;
    return regularHours * regularRate + overtimeHours * overtimeRate;
  }
}

const fulltimeEmployee = new FulltimeEmployee('John Doe');
fulltimeEmployee.addWorkingHours(8);
console.log(
  `${fulltimeEmployee.name} worked ${fulltimeEmployee.getWorkingHours()} hours`
);
console.log(
  `Full-time employee salary: IDR ${fulltimeEmployee
    .calculateSalary()
    .toLocaleString('id-ID')}`
);

const parttimeEmployee = new ParttimeEmployee('Jane Smith');
parttimeEmployee.addWorkingHours(7);
console.log(
  `${parttimeEmployee.name} worked ${parttimeEmployee.getWorkingHours()} hours`
);
console.log(
  `Part-time employee salary: IDR ${parttimeEmployee
    .calculateSalary()
    .toLocaleString('id-ID')}`
);
