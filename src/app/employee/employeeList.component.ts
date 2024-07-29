import { Component } from '@angular/core';

@Component({
  selector: 'list-employee',
  templateUrl: './employeeList.component.html',
  styleUrls: ['./employeeList.component.css']
})
export class EmployeeListComponent {

  employees: any[];

   constructor() { 
    this.employees = [
      { code: 'Emp101', name: 'Akash', gender: 'Male', annualSalary: 5500, dateOfBirth: '06/25/1994' },
      { code: 'Emp102', name: 'Vishal', gender: 'Male', annualSalary: 6900.95, dateOfBirth: '11/18/1995' },
      { code: 'Emp103', name: 'Medha', gender: 'Female', annualSalary: 7500, dateOfBirth: '04/12/1994' },
      { code: 'Emp104', name: 'Nimish', gender: 'Male', annualSalary: 6700.725, dateOfBirth: '01/20/1994' },
      
     ];
   
  }

  getEmployees(): void {
    this.employees = [
      { code: 'Emp101', name: 'Akash', gender: 'Male', annualSalary: 5500, dateOfBirth: '06/25/1994' },
      { code: 'Emp102', name: 'Vishal', gender: 'Male', annualSalary: 6900.95, dateOfBirth: '11/18/1995' },
      { code: 'Emp103', name: 'Medha', gender: 'Female', annualSalary: 7500, dateOfBirth: '04/12/1994' },
      { code: 'Emp104', name: 'Nimish', gender: 'Male', annualSalary: 6700.725, dateOfBirth: '01/20/1994' },
      { code: 'Emp105', name: 'Akshita', gender: 'Female', annualSalary: 6600.225, dateOfBirth: '01/12/1995' },
      
    ];
  }

  trackByEmpCode(index: number, employee: any): string {
    return employee.code;
  }
  
}
