import { Component } from "@angular/core";

@Component({
  selector: 'fruta', // Etiqueta con el nombre del selector
  templateUrl: './fruta.component.html' // Plantilla enlazada a fichero html
})

// class para exportar nuestra clase fruta
export class FrutaComponent {
  public nombre_componente = 'TITULO';
  public nombre:string;
  public edad:number;
  public mayorDeEdad:boolean;
  public trabajos:Array<any> = ['Carpintero',22,true];
  comodin:any;

  /* Primero se lanza el constructor */
  constructor(){
    this.nombre = 'Jose Manuel';
    this.edad = 37;
    this.mayorDeEdad = false;
    this.comodin = "si";

  }

  /*  Primer metodo que se ejecuta al iniciar un componente */
  ngOnInit(){
    this.cambiarNombre();
    this.cambiarEdad(45);

    // Variables y alcance:
    var uno = 8;
    var dos = 15;

    if(uno === 8 ){
      let uno = 3;
      var dos = 88;
      console.log("dentro del if: "+dos);
    }
    console.log("fuera del if: "+dos);
  }

  // METODOS
  cambiarNombre(){
    this.nombre = 'Pedro'
  }
  cambiarEdad(edad:number){
    this.edad = edad;
  }
}

