// Importar los componenetes para hacer uso de las rutas
import { ModuleWithProviders } from "@angular/core";
import { Routes,RouterModule } from "@angular/router";

// Importar componentes propios con los que vamos a trabajar.
import { EmpleadosComponent } from "./empleados/empleados.component";
import { FrutaComponent } from "./fruta/fruta.component";
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';

// Constante array para guardar las diferentes rutas que vamos a tener y que component cargan
const appRoutes: Routes = [
  {path:'', component: HomeComponent},
  {path:'empleado', component: EmpleadosComponent},
  {path:'fruta', component: FrutaComponent},
  {path:'home', component:HomeComponent},
  {path:'contacto', component: ContactoComponent},
  {path:'contacto/:page', component: ContactoComponent},
  {path:'**', component: HomeComponent}
];

// Exportar
export const appRoutingProviders: any[] = []; // Cargar la variable con array vacio
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes); // que array de rutas tiene que cargar
