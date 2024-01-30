import { Component } from '@angular/core';
import { RopaService } from '../services/ropa.service';

@Component({
  selector: 'app-ropa',
  templateUrl: './ropa.component.html',
  styleUrl: './ropa.component.css',
  providers:[RopaService]
})
export class RopaComponent {
  public titulo = "ropa.component";
  public listado_ropa:Array<string>;
  public prenda_a_guardar:string;

  constructor(
    private _ropaService: RopaService
  ){}

  ngOnInit(){
    this.listado_ropa = this._ropaService.getRopa();
    console.log(this.listado_ropa);
  }

   // Método para guardar una nueva prenda en el array:
   guardarPrenda(){
    this._ropaService.addRopa(this.prenda_a_guardar);
    this.prenda_a_guardar = "";
  }

  eliminarPrenda(index:number){
    this._ropaService.deleteRopa(index);
    alert(index);
  }



}
