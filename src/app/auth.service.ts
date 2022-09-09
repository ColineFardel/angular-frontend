import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  login(userName: string, password: string): boolean {
    console.log(userName);
    console.log(password);
    localStorage.setItem('isUserLoggedIn', "true");
    return this.isUserLoggedIn;
  }

  get isUserLoggedIn(): boolean {
    let isLoggedIn = localStorage.getItem('isUserLoggedIn');
    return isLoggedIn === "true" ? true : false;
  }

  constructor() { }
}
