import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module'; // Nueva forma de hacer las rutas
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

// Importacion de componentes propios
import { PlantillasComponent } from './plantillas/plantillas.component';
import { TiempoComponent } from './tiempo/tiempo.component';
import { MapaComponent } from './mapa/mapa.component';
import { HijoComponent } from './hijo/hijo.component';
import { ArticulosComponent } from './articulos/articulos.component';
import { FrutaComponent } from './fruta/fruta.component';
import { EmpleadosComponent} from './empleados/empleados.component';
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ConversorPipe } from './pipes/conversor.pipe';
import { CochesComponent } from "./coches/coches.component";
import { RopaComponent } from './ropa/ropa.component';
import{ ArticulosService } from './services/articulos.service';
import { ColoresComponent } from './colores/colores.component';
import { ProductosComponent } from './productos/productos.component';



@NgModule({
  declarations: [
    AppComponent,
    FrutaComponent,
    EmpleadosComponent,
    HomeComponent,
    ContactoComponent,
    ConversorPipe,
    CochesComponent,
    PlantillasComponent,
    TiempoComponent,
    MapaComponent,
    HijoComponent,
    ArticulosComponent,
    RopaComponent,
    ColoresComponent,
    ProductosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, // añade app routing module
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
