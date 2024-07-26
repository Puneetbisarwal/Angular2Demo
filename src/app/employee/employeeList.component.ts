import { Component } from '@angular/core';

@Component({
  selector: 'list-employee',
  templateUrl: './employeeList.component.html',
  styleUrls: ['./employeeList.component.css']
})
export class EmployeeListComponent {
   employees: any[] = [
    { code: 'Emp101', name: 'Akash', gender: 'Male', annualSalary: 5500, dateOfBirth: '25/06/1994' },
    { code: 'Emp102', name: 'Vishal', gender: 'Male', annualSalary: 6900.95, dateOfBirth: '18/11/1995' },
    { code: 'Emp103', name: 'Medha', gender: 'Female', annualSalary: 7500, dateOfBirth: '12/04/1994' },
    { code: 'Emp104', name: 'Nimish', gender: 'Male', annualSalary: 6700.725, dateOfBirth: '20/01/1994' },
    
   ];
  
}
