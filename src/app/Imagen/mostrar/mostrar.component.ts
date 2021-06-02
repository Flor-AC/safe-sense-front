import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-mostrar',
  templateUrl: './mostrar.component.html',
  styleUrls: ['./mostrar.component.css']
})
export class MostrarComponent{

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  Ingresar() {
    this.router.navigate(['ingresar']);
  }

  Subir() {
    this.router.navigate(["subir"])
  }
}
