import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
/*templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']*/
template: `<div>
           <h1> {{getFullName()}} </h1>
           <img src= 'https://www.pragimtech.com/wp-content/uploads/2019/{{imagePath}}'/>
           <my-employee></my-employee>
           <button [disabled] = 'isDisabled'> Click Me </button>
           <span [innerHTML] = 'pageHeader'> </span>
           <div [innerHTML] = 'badHtml'> </div>
           </div>`

})
export class AppComponent {
  pageHeader: string = ' Employee Details';
  imagePath: string = '02/pargim-logo-1.png';
  isDisabled: boolean = false;
  badHtml: string = 'Hello <script> alert("Hacked");</script> World';

  firstName: string = 'Vivek';
  lasttName: string = 'Kumar';

  getFullName(): string {
    return this.firstName + ' ' + this.lasttName;
  }
}
