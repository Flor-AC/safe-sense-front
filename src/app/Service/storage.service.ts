import { Injectable } from '@angular/core';
import { Usuario } from '../Model/usuario';

const USER_KEY = 'auth-user';

@Injectable({
    providedIn: 'root'
  })
  export class StorageService {
    constructor() { }
  
    signOut(): void {
      window.sessionStorage.clear();
    }
  
    public saveUser(user: Usuario): void {
      window.sessionStorage.removeItem(USER_KEY);
      window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
    }
  
    public getUser(): any {
      const user = window.sessionStorage.getItem(USER_KEY);
      if (user) {
        return JSON.parse(user);
      }
  
      return {};
    }

    public isUserLoggedIn() {
      let user = sessionStorage.getItem(USER_KEY);
      return !(user === null)
    }
  }