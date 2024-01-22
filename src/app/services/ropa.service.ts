// Importamos el modulo inyectable
import { Injectable } from "@angular/core";

// Definir el decorador injectable

@Injectable()

export class RopaService{
  public nombre_prenda:string = 'Pantalones vaqueros';
  public coleccion_ropa = ['Pantalones Blancos', 'Camiseta roja'];


  // Método prueba
  prueba(nombre_prenda:string){
    return nombre_prenda;
  }

  // Método para agregar ropa
  addRopa(nombre_prenda:string):Array<string>{
    this.coleccion_ropa.push(nombre_prenda);
    return this.getRopa();
  }
  deleteRopa(index:number){
    this.coleccion_ropa.splice(index,1);
    return this.getRopa
  }
  getRopa():Array<string>{
    return this.coleccion_ropa;
  }
}
