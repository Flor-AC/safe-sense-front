import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ApiService } from '../../Service/api.service';
import { StorageService } from '../../Service/storage.service';

@Component({
  selector: 'app-subir',
  templateUrl: './subir.component.html',
  styleUrls: ['./subir.component.css']
})
export class SubirComponent implements OnInit {
  mostraralert: any;
  currentUser: any;
  time: any;
  fecha: any;
  hora: any;
  imagen: any;
  nombreSensor: any;
  isSafe: any;


  constructor(private router: Router, private apiService: ApiService, private storageService: StorageService) {
    this.mostraralert = false;
    this.isSafe = true;
  }

  ngOnInit(): void {
    this.currentUser = this.storageService.getUser();
  }

  StratAlert() {
    this.time = setInterval( () => { this.GetLastReport() }, 10000);
  }

  StopAlert() {
    clearInterval(this.time);
    this.isSafe = true;
    this.mostraralert = false;
  }

  GetLastReport(){
    this.apiService.getLastReport().subscribe(data =>{
      console.log(data)
      this.fecha = new Date(data.fecha);
      this.hora = this.toTime(data.hora);
      this.imagen = data.imagen;
      this.nombreSensor = data.nombreSensor;
      this.mostraralert = true;
      this.isSafe = false;
    }, error => {
      console.log(error);
      this.mostraralert = false;
      this.isSafe = true;
    })
    setTimeout(()=>{this.isSafe = true, this.mostraralert = false}, 5000)
  }

  toTime(timeString: any){
    var timeTokens = timeString.split(':');
    return new Date(1970,0,1, timeTokens[0], timeTokens[1], timeTokens[2]);
  }

}
