import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
/*templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']*/
  template: `<button [class.colorClass] = "applyColorClass" [class]= 'classesToApply'> My Button </button>
            <br/> <br/>
            <button class = "colorClass italicClass boldClass" [class.boldClass]= 'applyBoldClass'> My Button </button>
            <br> <br>
            <button class = "colorClass" [ngClass]= 'addClasses()'> My Button </button>
            `

})
export class AppComponent {
  classesToApply:string = 'italicClass boldClass' ;
  applyBoldClass: boolean = true;
  applyItalicClass: boolean = false;
  applyColorClass: boolean = false;

  addClasses() {
    let classes = {
      boldClass: this.applyBoldClass,
      italicClass: this.applyItalicClass
    };

    return classes;
  }
  
}
