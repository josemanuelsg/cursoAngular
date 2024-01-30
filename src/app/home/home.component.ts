import
 {Component} from '@angular/core';



 // Decorador
 @Component({
  selector:'home',
  templateUrl: './home.component.html'
 })

 export class HomeComponent{
    public titulo = "home.component";
    public fecha;
    public nombre = "jose Manuel";

    constructor(){
      this.fecha = new Date(); // Sin argumentos fecha actual.
    }

    ngOnInit(){
      console.log("Home arrancado");

    }


 }
