import { Component } from '@angular/core';

@Component({
  selector: 'plantillas',
  templateUrl: './plantillas.component.html',
})
export class PlantillasComponent {
  public titulo;
  public administrador;



  public dato_externo = 'Jose Manuel';
  public indentity = {
    id: 1,
    web: 'josemanuel.es',
    tematica: 'Desarrollo web',
  };

  constructor() {
    this.titulo = 'Plantillas ngTemplate en Angular';
    this.administrador = false;
  }

  //metodo para cambiar admin
  cambiar(value: boolean) {
    this.administrador = value;
  }

  public datos_del_hijo:any;
  recibirDatos(event:any){
    console.log(event.nombre);
    this.datos_del_hijo = event;
  }
}
