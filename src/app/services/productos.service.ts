import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private _http: HttpClient) { }


  getProductos(){
    const url = `https://localhost:7184/api/Products/getProductos`;
    return this._http.get(url);
  }

  getProductoId(id:number): Observable<any>{
    const url =`https://localhost:7184/api/Products/getProductoId?id=${id}`;
    return this._http.get(url);
  }

  getProductosPorCategoria(categoria:string) : Observable<any>{
    const url = `https://localhost:7184/api/Products/getProductoCategoria?category=${categoria}`;
    return this._http.get(url);
  }

  getProductoPorNombre(nombreBuscar:string): Observable<any>{
    const url = `https://localhost:7184/api/Products/getProductoNombre?name=${nombreBuscar}`;
    return this._http.get(url);
  }


}
