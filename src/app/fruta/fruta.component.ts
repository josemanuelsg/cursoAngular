import { Component } from '@angular/core';

@Component({
	selector: 'fruta',
	templateUrl: './fruta.component.html'
})
export class FrutaComponent{
	public nombre_componente = 'Componente de fruta';
	public listado_frutas = 'Naranja, Manzana, Pera y Sandia';

	public nombre:string;
	public edad:number;
	public mayorDeEdad:boolean;
	public trabajos:Array<any> = ['Carpintero', 44, 'Fontanero'];
	comodin:any;

	constructor(){
		this.nombre = 'Víctor Robles';
		this.edad = 77;
		this.mayorDeEdad = false;
		this.comodin = "SI";
	}

	ngOnInit(){
		this.cambiarNombre();
		this.cambiarEdad(45);
		console.log(this.nombre + " " + this.edad);

		// Variables y alcance
		var uno = 8;
		var dos = 15;

		if(uno === 8){
			let uno = 3;
			var dos = 88;

			console.log("DENTRO DEL IF: "+uno+" "+dos);
		}

		console.log("FUERA DEL IF: "+uno+" "+dos);
	}

	cambiarNombre(){
		this.nombre = 'Juan Lopez';
	}

	cambiarEdad(edad:any){
		this.edad = edad;
	}
}
