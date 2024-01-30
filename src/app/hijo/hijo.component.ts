import { Component } from "@angular/core";
import { Input } from "@angular/core"; // importamos el componente  Input
import { Output } from "@angular/core"; // importamos el decorador Output para permiiri salidas
import { EventEmitter } from "@angular/core"; // Nos permite crear un evento y lanzarlo


@Component({
  selector: 'componente-hijo',
  template: `
              <p> Este es el {{title}} </p>
              <ul>
                <li>{{propiedad_uno}}</li>
                <li>{{propiedad_dos}}</li>
              </ul>
              <button (click)="enviar()">Enviar datos al padre</button>
              `,
})
export class HijoComponent{
  public title: string;

  // @Input('alias') indica que propiedad le llega de fuera, se puede utilizar con argumento de alias o con el nombre directamente
  @Input('texto1') propiedad_uno: string;
  @Input() propiedad_dos:string;

  @Output() desde_el_hijo = new EventEmitter();

  constructor(){
    this.title = "Componente Hijo";

  }

  ngOnInit(){
    console.log(this.propiedad_uno);
    console.log(this.propiedad_dos);
  }

  enviar(){
    this.desde_el_hijo.emit({nombre: 'Jose Manuel suarez web',
                              web: 'sejo.es'});
  }
}
