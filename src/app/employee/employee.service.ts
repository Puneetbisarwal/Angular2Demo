import { Injectable } from "@angular/core";
import { IEmployee } from "./employee";

@Injectable()
export class EmployeeService {
    getEmployees(): IEmployee[] {
        return [
            { code: 'Emp101', name: 'Akash', gender: 'Male', annualSalary: 5500, dateOfBirth: '06/25/1994' },
      { code: 'Emp102', name: 'Vishal', gender: 'Male', annualSalary: 6900.95, dateOfBirth: '11/18/1995' },
      { code: 'Emp103', name: 'Medha', gender: 'Female', annualSalary: 7500, dateOfBirth: '04/12/1994' },
      { code: 'Emp104', name: 'Nimish', gender: 'Male', annualSalary: 6700.725, dateOfBirth: '01/20/1994' },
      { code: 'Emp105', name: 'Akshita', gender: 'Female', annualSalary: 6600.225, dateOfBirth: '01/12/1995' },
      { code: 'Emp106', name: 'Sakshi', gender: 'Female', annualSalary: 6400.250, dateOfBirth: '11/22/1994' },
      { code: 'Emp107', name: 'Abhishek', gender: 'Male', annualSalary: 6800.725, dateOfBirth: '06/18/1994' },

        ];
    }
}