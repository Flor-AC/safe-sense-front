import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-subir',
  templateUrl: './subir.component.html',
  styleUrls: ['./subir.component.css']
})
export class SubirComponent {
  mostraralert: boolean;
  day: number;
  month: number;
  year: number;
  hour: number;
  minute: number;

  constructor(private router: Router) {
    this.mostraralert = false;
    this.day = 0;
    this.month = 0;
    this.year = 0;
    this. hour = 0;
    this.minute = 0;
  }

  ngOnInit(): void {
    this.obtenerFecha();
  }

  Mostrar() {
    this.router.navigate(['mostrar']);
  }
  Ingresar() {
    this.router.navigate(['ingresar']);
  }

  Subir() {
    this.mostraralert = true;
  }

  obtenerFecha(){
     var fecha = new Date();
     this.day = fecha.getDate();
     this.month = fecha.getMonth();
     this.year = fecha.getFullYear();
     this.hour = fecha.getHours();
     this.minute = fecha.getMinutes();

    var fechaActual = fecha.getTime();
    console.log(fechaActual);
  }
}
