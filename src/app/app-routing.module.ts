import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegistrarComponent} from "./Login/registrar/registrar.component";
import {SubirComponent} from "./Imagen/subir/subir.component";
import {MostrarComponent} from "./Imagen/mostrar/mostrar.component";

const routes: Routes = [
  {path: 'registrar', component: RegistrarComponent},
  {path: 'subir', component: SubirComponent},
  {path: 'mostrar', component: MostrarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
