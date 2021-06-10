import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { ApiService } from './Service/api.service';
import {StorageService} from './Service/storage.service'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IngresarComponent } from './Login/ingresar/ingresar.component';
import { RegistrarComponent } from './Login/registrar/registrar.component';
import { SubirComponent } from './Imagen/subir/subir.component';
import { MostrarComponent } from './Imagen/mostrar/mostrar.component';

import {NgxPaginationModule} from 'ngx-pagination';
import {NgxSpinnerModule} from "ngx-spinner";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProfileComponent } from './Profile/profile.component';
import { HeadingComponent } from './heading/heading.component';

@NgModule({
  declarations: [
    AppComponent,
    IngresarComponent,
    RegistrarComponent,
    SubirComponent,
    MostrarComponent,
    ProfileComponent,
    HeadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
    NgxSpinnerModule,
    BrowserAnimationsModule
  ],
  providers: [ApiService, StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
