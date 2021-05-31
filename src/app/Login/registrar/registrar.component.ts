import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent {

  mostraralert:boolean;

  constructor(private router: Router) {
    this.mostraralert = false;
  }

  ngOnInit(): void {
  }

  Registrar(){
    this.mostraralert = true;
  }

  Ingresar() {
    this.router.navigate(['ingresar']);
  }

}
