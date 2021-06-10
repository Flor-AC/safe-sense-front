import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ApiService} from '../../Service/api.service';
import {Usuario} from '../../Model/usuario';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {

  mostraralert = true;
  isSuccessful = false;
  nombre = '';
  apellido = '';
  telefono = '';
  direccion = '';
  correo = '';
  password = '';
  message = '';

  constructor(private router: Router, private service: ApiService) {}

  ngOnInit(): void {
  }

  Registrar(){
    var form = new Usuario(this.nombre, this.apellido, this.telefono, this.direccion, this.correo, this.password);
    form.nombre = this.nombre;
    form.apellido = this.apellido;
    form.telefono = this.telefono;
    form.direccion = this.direccion;
    form.correo = this.correo;
    form.password = this.password;
    this.service.register(form).subscribe(
      data => {
        this.isSuccessful = data.isSuccess;
        this.mostraralert = true;
        this.message = data.message;
      },
      error => {
        console.log(error);
        this.message = error.error.message;
        this.isSuccessful = error.error.isSuccess;
        this.mostraralert = error.error.isSuccess;
      }
    );
  }

  Ingresar() {
    this.router.navigate(['ingresar']);
  }

}
