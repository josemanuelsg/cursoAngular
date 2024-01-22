import
 {Component} from '@angular/core';
 import { RopaService } from '../services/ropa.service';


 // Decorador
 @Component({
  selector:'home',
  templateUrl: './home.component.html',
  providers:[RopaService]
 })

 export class HomeComponent{
    public titulo = "Página principal";
    public listado_ropa:Array<string>;

    constructor(
      private _ropaService: RopaService
    ){}

    ngOnInit(){
      this.listado_ropa = this._ropaService.getRopa();
      console.log(this._ropaService.prueba('Camiseta Nike'));

    }

 }
