import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';

@Injectable()
export class PeticionesService{
  public url: string;

  constructor(private _http:HttpClient){
    this.url = "https://jsonplaceholder.typicode.com/posts";
  }
  getPrueba(){
    return 'servicio de peticiones peticiones.service.ts';
  }
  getArticulos(){
    return this._http.get(this.url);
  }
}



