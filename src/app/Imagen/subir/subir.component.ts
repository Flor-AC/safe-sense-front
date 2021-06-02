import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-subir',
  templateUrl: './subir.component.html',
  styleUrls: ['./subir.component.css']
})
export class SubirComponent {
  mostraralert: boolean;

  constructor(private router: Router) {
    this.mostraralert = false;
  }

  ngOnInit(): void {
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
}
