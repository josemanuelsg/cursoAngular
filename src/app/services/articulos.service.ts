import {Injectable} from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class ArticulosService{
  public url:string;

  // En el constructor instanciamos un objeto HttpClient (cuando son privados por convencion se inician los nombres de las variables con _ )
  constructor(private _http:HttpClient){
    this.url = "https://jsonplaceholder.typicode.com/posts";
  }

  // Obtener la lista de articulos
  getArticulos(){
    return this._http.get(this.url);
  }
}
