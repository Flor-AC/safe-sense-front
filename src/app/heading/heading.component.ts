import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../Service/storage.service';

@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.css']
})
export class HeadingComponent implements OnInit {

  constructor(public storageService:StorageService, private router: Router ) { }

  result = '';

  ngOnInit(): void {
  }

  logout() {
    this.storageService.signOut();
    this.result = 'logout';
  }
  
}
