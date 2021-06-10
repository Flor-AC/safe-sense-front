import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ApiService} from '../../Service/api.service';
import {StorageService} from '../../Service/storage.service';
import {LoginForm} from '../../Model/loginForm';

@Component({
  selector: 'app-ingresar',
  templateUrl: './ingresar.component.html',
  styleUrls: ['./ingresar.component.css']
})
export class IngresarComponent implements OnInit{

  title='safe-sense';
  correo = '';
  password = '';
  isLoggedIn = false;
  alerta = true;
  message = '';

  constructor(private router: Router, private service: ApiService, private storageService:StorageService) { }

  ngOnInit(): void {
  }

  Ingresar() {
    var form = new LoginForm(this.correo, this.password);
    form.correo = this.correo;
    form.password = this.password;
    
    this.service.login(form).subscribe(
      data => {
        this.isLoggedIn = data.isSuccess;
        this.alerta = data.isSuccess;
        this.message = data.message;
        this.storageService.saveUser(data.usuario);
        this.router.navigate(['/perfil']);
      }, error => {
        console.log(error);
        this.isLoggedIn = false;
        this.alerta = error.error.isSuccess;
        this.message = error.error.message;
      }
    )
  }

}
