import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ApiService} from '../../Service/api.service';
import {Usuario} from '../../Model/usuario';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent {

  mostraralert:boolean;
  nombre: string;
  apellido: string;
  telefono: string;
  direccion: string;
  correo: string;
  password: string;
  message: string;

  constructor(private router: Router, private service: ApiService) {
    this.mostraralert = false;
    this.nombre = '';
    this.apellido = '';
    this.telefono = '';
    this.direccion = '';
    this.correo = '';
    this.password = '';
    this.message = '';
  }

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
        
        this.mostraralert = data.isSuccess;
        console.log(data.isSuccess);
        this.message = data.message;
        console.log(data.message);
      },
      error => {
        console.log(error);
        this.message = error.error.message;
        this.mostraralert = error.error.isSuccess;
      }
    );
  }

  Ingresar() {
    this.router.navigate(['ingresar']);
  }

}
