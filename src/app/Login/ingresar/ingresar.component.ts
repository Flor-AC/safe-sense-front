import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-ingresar',
  templateUrl: './ingresar.component.html',
  styleUrls: ['./ingresar.component.css']
})
export class IngresarComponent implements OnInit {

  title='safe-sense';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  Registrar() {
    this.router.navigate(['registrar']);
  }

  Subir(){

    this.router.navigate(['subir']);
  }
}
