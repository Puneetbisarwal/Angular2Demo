import { Component } from '@angular/core';

@Component({
  selector: 'employee-count',
  templateUrl: './employeeCount.component.html',
  styleUrls: ['./employeeCount.component.css']
})

export class EmployeeCountComponent {
    all: number = 5;
    male: number = 3;
    female: number = 2;

}