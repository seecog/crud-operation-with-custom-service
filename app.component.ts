import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private first_name : string = "Mohan";
  private last_name : string = " Kumar";
  private age :  number = 21;
  private sal : number = 100;
}
