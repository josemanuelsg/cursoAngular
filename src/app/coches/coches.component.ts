// Los nombres entre llaves indican que importas un modulo concreto, en este caso el modulo component
import { Component } from '@angular/core';
import { Coche } from './coche';
import { PeticionesService } from '../services/peticiones.service';

@Component({
  selector: 'coches',
  templateUrl: './coches.component.html',
  providers: [PeticionesService],
})
export class CochesComponent {
  public coche: Coche;
  public coches: Array<Coche>;
  public articulos;
  constructor(private _peticionesService: PeticionesService) {
    this.coche = new Coche('', '', '');
    this.coches = [
      new Coche('Seat Panda', '80', 'rosa'),
      new Coche('Seat Leon ', '105', 'blanco'),
      new Coche('Seat 600', '80', 'amarillo'),
      new Coche('Lamborgini Huracan', '280', 'verde'),
      new Coche('Tesla model 3', '180', 'gris'),
    ];
  }
  ngOnInit() {
    this._peticionesService.getArticulos().subscribe(
      (result) => {
        console.log(result);
      },
      (error) => {
        var errorMessage = <any>error;
        console.log(errorMessage);
      }
    );
  }
  //Método cuando hacemos submit en el formulario:
  onSubmit() {
    console.log(this.coche);
    this.coches.push(this.coche);
    this.coche = new Coche('', '', ''); // Vaciamos los campos con un nuevo objeto vacio
  }
}
