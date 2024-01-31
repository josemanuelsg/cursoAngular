import { Component } from '@angular/core';
import { ProductosService } from '../services/productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css',
})
export class ProductosComponent {
  public titulo = 'Titulo productos.component.ts';
  public productos: any;
  public id: any;
  public categoria: string = '';
  public productosPorCategoria: any;
  public nombreBuscar:string = '';
  public productoPorNombre: any;


  constructor(private _servicioProductos: ProductosService) {}

  ngOnInit() {
    console.log('productos.component.ts cargado');

    // Llamar al servicio
    this._servicioProductos.getProductos().subscribe({
      next: (result) => {
        this.productos = result;
        console.log(this.productos);
        if (!this.productos) {
          console.log('Error en el servidor');
        }
      },
      error: (error) => {
        var errorMessasge = <any>error;
        console.log(errorMessasge);
      }
    });
  }

  buscarProductosPorCategoria(){
    this._servicioProductos.getProductosPorCategoria(this.categoria).subscribe({
      next: (result) =>{
        this.productosPorCategoria = result;
        console.log(this.productosPorCategoria);
        if(!this.productosPorCategoria){
          console.log('Error en el servidor');
        }
      },
      error: (error)=>{
        var errorMessasge = <any>error;
        console.log(errorMessasge);
      },
    });
  }

  buscarProductoPorNombre(){
    this._servicioProductos.getProductoPorNombre(this.nombreBuscar).subscribe({
      next:(result)=>{
        this.productoPorNombre = result;
        console.log(this.productoPorNombre);
        if(!this.productoPorNombre){
          console.log('Errror en el servidor');
        }
      },
      error:(error)=>{
          var errorMessage = <any>error;
          console.log(errorMessage);
      },
    });
  }











}
