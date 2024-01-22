import {Component} from '@angular/core';
import {Empleado} from './empleado';

@Component
({
  selector: 'empleados',
  templateUrl:'./empleados.component.html'
})

export class EmpleadosComponent {
  public titulo = 'componente empleados';
  public empleado:Empleado;
  public trabajadores:Array<Empleado>;
  public trabajador_externo:boolean;
  public color:string;
  public color_seleccionado:string;


  constructor(){
    this.empleado = new Empleado('Angel', 45, 'Cocinero',true);
    this.trabajadores = [
      new Empleado('Alberto', 40, 'abogado',false),
      new Empleado('guilleromo', 39, 'azucarera',false),
      new Empleado('David ', 40, 'carnicero',true),
    ];
    this.trabajador_externo = true; // por defecto
    this.color= 'green'; // por defecto ponemos rojo
    this.color_seleccionado = '#ccc';
  }


  ngOnInit(){
    console.log(this.empleado);
    console.log(this.trabajadores);
  }

  // Método para cambiar el valor del trabajador
  cambiarExterno(valor:any){
    this.trabajador_externo = valor;
  }

  // Método
  logColorSeleccionado(){
    console.log(this.color_seleccionado);
  }
}
