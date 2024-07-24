import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
/*templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']*/

  template: `<button style='color:red' [style.font-weight] = "isBold ? 'bold' : 'normal'"> My Button </button>
            <br/> <br/>
            <button style = 'color:red' [style.font-size.px] = "fontSize"> My Button </button>
            <br> <br>
            <button style = 'color:red' [ngStyle]= "addStyles()"> My Button </button>
            `

})
export class AppComponent {
  isBold: boolean = true;
  fontSize: number = 30;
  isItalic: boolean = true;

  addStyles() {
    let styles = {
      'font-size.px': this.fontSize,
      'font-style': this.isItalic ? 'italic' : 'normal',
      'font-weight': this.isBold ? 'bold' : 'normal',
    };
    return styles;
  }
  
}
