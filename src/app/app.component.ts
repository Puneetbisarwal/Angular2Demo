import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
/*templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']*/

  template: `
            <my-employee> </my-employee> 
            <br/> <br/>
            <br> <br>

            `

})
export class AppComponent {
  onClick () : void {
    console.log('Button Clicked');

  }

}
