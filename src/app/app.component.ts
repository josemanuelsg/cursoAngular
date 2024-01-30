import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public title:string = 'app.component.ts';
  public header_color: string;

  constructor(){
    this.header_color = "lightgrey";
  }
}
