import { Component } from '@angular/core';

@Component({
  selector: 'app-colores',
  templateUrl: './colores.component.html',
  styleUrl: './colores.component.css'
})
export class ColoresComponent {
  public titulo:string = 'Titulo de colores.component.ts';
  public color:string;
  public color_seleccionado:string;

  constructor(){
    this.color= 'green'; // Color por defecto
    this.color_seleccionado = '#ccc';
  }

  ngOnInit(){
    console.log(this.color);
  }

  logColorSeleccionado(){
    console.log(this.color_seleccionado);
  }
}
