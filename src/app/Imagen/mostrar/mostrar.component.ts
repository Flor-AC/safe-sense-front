import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ApiService } from '../../Service/api.service';
import { Reporte } from '../../Model/reporte';
import { StorageService } from '../../Service/storage.service';

@Component({
  selector: 'app-mostrar',
  templateUrl: './mostrar.component.html',
  styleUrls: ['./mostrar.component.css']
})
export class MostrarComponent {

  reportes: Reporte[];
  actual: number = 1;
  currentUser: any;

  constructor(private router: Router, private service: ApiService, private storageService: StorageService) {
    this.reportes = [];
  }

  ngOnInit(): void {
    this.service.getReportes()
      .subscribe(data => {
        this.reportes = data;
        console.log(this.reportes)
      }, err => {
        console.log(err)
      });
    this.currentUser = this.storageService.getUser();
  }
}
