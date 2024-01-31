import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TiempoService {

  public url:string;


  constructor(private _http:HttpClient) {
    this.url = "https://localhost:7184/WeatherForecast";
   }


  ngOnInit(){
    console.log("Servicio de tiempo")
  }

  getTiempo(){
    return this._http.get(this.url)
  }
}
