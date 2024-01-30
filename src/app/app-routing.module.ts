import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Importar componentes propios con los que vamos a trabajar.
import { EmpleadosComponent } from "./empleados/empleados.component";
import { FrutaComponent } from "./fruta/fruta.component";
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';
import { CochesComponent } from "./coches/coches.component";
import { PlantillasComponent } from "./plantillas/plantillas.component";
import { RopaComponent } from './ropa/ropa.component';


const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'empleado', component: EmpleadosComponent},
  {path:'fruta', component: FrutaComponent},
  {path:'home', component:HomeComponent},
  {path:'contacto', component: ContactoComponent},
  {path:'contacto/:page', component: ContactoComponent},
  {path:'coches', component: CochesComponent},
  {path:'plantillas', component: PlantillasComponent},
  {path:'ropa',component:RopaComponent},
  {path:'**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
