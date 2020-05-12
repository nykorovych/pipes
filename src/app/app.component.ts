import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = ''
  date: string = ''
  amout: number;
  height: number;
  miles: number;

  onHeightChange (value:string) {
    this.height = parseFloat(value);
  }

  onMilesChange (value:string) {
    this.miles = parseFloat(value);
  }

  onNameChange(value: string) {
    this.name = value;
  }
  onDateChange (value: string) {
   this.date = value;
  }


  onAmoutChange(value: string) {
   
    this.amout = parseFloat(value)
    
  }
}
