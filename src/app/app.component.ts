import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
            Name : <input [value] = 'name' (input) = 'onInputChange($event)'/> 
            <br/> <br/>
            You Entered : {{name}}
            <br> <br>
            Name : <input [(ngModel)] = 'name'/>
            <br/> <br/>
            You Entered : {{name}}
            <br> <br>        

            `

})
export class AppComponent {

  name: String = 'Rajat';

  onInputChange(e) {
    this.name = (e.target as HTMLInputElement).value
  }

}
