import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegistrarComponent} from "./Login/registrar/registrar.component";
import {SubirComponent} from "./Imagen/subir/subir.component";
import {MostrarComponent} from "./Imagen/mostrar/mostrar.component";
import {IngresarComponent} from "./Login/ingresar/ingresar.component";
import {ProfileComponent} from "./Profile/profile.component";

const routes: Routes = [
  {path: 'registrar', component: RegistrarComponent},
  {path: 'ingresar', component: IngresarComponent},
  {path: 'monitoreo', component: SubirComponent},
  {path: 'reportes', component: MostrarComponent},
  {path: 'perfil', component: ProfileComponent},
  {path: '', component: IngresarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
