import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculator-project';

  currentValue: string = '';

  addValue(value: any) {
    this.currentValue += value.toString();
  }

  calculate() {
    try {
      this.currentValue = eval(this.currentValue);
    } catch (error) {
      this.currentValue = 'Error';
    }
  }

  clear() {
    this.currentValue = '';
  }

  
}