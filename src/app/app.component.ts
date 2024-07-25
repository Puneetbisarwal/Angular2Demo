import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
/*templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']*/

  template: `
            <div>
              <button [disabled] = 'isDisabled'> Click Me </button>
              <br>
              <button disabled = '{{isDisabled}}'> Click Me Here </button>
              <br>

              <input id = 'inputId' type = 'text' value = 'Puneet'>
            </div>

            `

})
export class AppComponent {
  isDisabled: boolean = false;

}
