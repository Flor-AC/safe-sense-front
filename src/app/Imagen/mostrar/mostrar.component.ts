import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ApiService} from '../../Service/api.service';
import {Reporte} from '../../Model/reporte';

@Component({
  selector: 'app-mostrar',
  templateUrl: './mostrar.component.html',
  styleUrls: ['./mostrar.component.css']
})
export class MostrarComponent{

  reportes:Reporte[];
  actual: number = 1;

  constructor(private router: Router, private service:ApiService) { 
    this.reportes = [];
  }

  ngOnInit(): void {
    this.service.getReportes()
          .subscribe(data => {
            this.reportes = data;
            console.log(this.reportes)
          }, err => {
            console.log(err)
          })
  }

  Ingresar() {
    this.router.navigate(['ingresar']);
  }

  Subir() {
    this.router.navigate(["subir"])
  }
}
