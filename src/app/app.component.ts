import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
            <list-employee> </list-employee>
    
            `

})
export class AppComponent {

  name: String = 'Rajat';

  onInputChange(e) {
    this.name = (e.target as HTMLInputElement).value
  }

}
