import { Component } from '@angular/core';

@Component({
  selector: 'my-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
    columnSpan: number = 2;  
    firstName: string = 'Vivek';
    lastName: string = 'Kumar';
    gender: string = 'Male';
    age: number = 20;
    address: string = 'Delhi';
    showDetails : boolean = false;


    toggleDetails(): void {
      this.showDetails = !this.showDetails;
    }
  
}
