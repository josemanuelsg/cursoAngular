import { Component } from "@angular/core";
import {Router,ActivatedRoute, Params}  from '@angular/router';

 // Decorador
 @Component({
  selector:'contacto',
  templateUrl: './contacto.component.html'
 })

 export class ContactoComponent{
    public titulo = "Página de contacto";
    public parametro: string = '';

    constructor(
      private _route: ActivatedRoute,
      private _router: Router
    ){}

    ngOnInit(){
        this._route.params.forEach((params: Params)=>{
          this.parametro = params['page'];
          console.log(params);
        });
    }
    redirigir(){
      this._router.navigate(['/contacto','josemanuel.es']);
    }
    redirigir2(){
      this._router.navigate(['/home']);
    }
 }
