import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
            Name : <input [(ngModel)] = 'name'/>
            <br/> <br/>
            You Entered : {{name}}
            <br> <br>        

            `

})
export class AppComponent {

  name: String = 'Rajat';

}
