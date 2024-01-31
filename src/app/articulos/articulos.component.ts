import { Component } from '@angular/core';
import { ArticulosService } from '../services/articulos.service';

@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrl: './articulos.component.css',
  providers: [ArticulosService],
})
export class ArticulosComponent {
  public titulo = "Titulo artiulos.component.ts";
  public articulos:any;


  constructor(private _servicioArticulos: ArticulosService) {}

  // Método que se carga al iniciar el componente
   ngOnInit() {
    console.log('articulos.component.ts cargado');

    // Llamamos al método getArticulos del servicio articulos.service.ts
    this._servicioArticulos.getArticulos().subscribe({
      next: (result) => {
        this.articulos = result;
        console.log(this.articulos);
        if (!this.articulos) {
          console.log('Error en el servidor');
        }
      },
      error: (error) => {
        var errorMessasge = <any>error;
        console.log(errorMessasge);
      },
    });
  }
}
