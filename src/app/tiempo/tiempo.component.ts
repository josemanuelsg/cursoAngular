import { Component } from '@angular/core';
import { TiempoService } from '../services/tiempo.service';

@Component({
  selector: 'app-tiempo',
  templateUrl: './tiempo.component.html',
  styleUrl: './tiempo.component.css'
})
export class TiempoComponent {
  public titulo = 'Titulo de tiempo.component.ts';
  public tiempo: any;

  constructor(private _tiempoService: TiempoService){}

  ngOnInit(){
    console.log('tiempo.component.ts cargado');

    this._tiempoService.getTiempo().subscribe({
      next:(result)=>{
        this.tiempo= result;
        console.log(this.tiempo);
        if(!this.tiempo){
          console.log('Error en el servidor');
        }
      },
      error: (error)=>{
        console.log(error);
      }
    })



  }




}
