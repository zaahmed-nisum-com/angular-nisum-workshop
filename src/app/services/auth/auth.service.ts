import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LocalstorageService } from 'src/app/localstorage/localstorage.service';

interface authData {
  [key: string]: string | any;
}
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private router: Router,
    private localStorageService: LocalstorageService
  ) { }

  login(data: authData) {
    if (data.email == 'zaahmed@gmail.com' && data.password == '123123') {
      this.localStorageService.addItem('auth', {
        email: 'zaahmed@gmail.com',
        isLogin: true,
        authToken: '81hud29hfu32nf9hfurbegfo3h42hgf',
      });
      this.router.navigate(['/admin']);
    }
  }

  logout(data: authData) {
    this.localStorageService.addItem('auth', { ...data });
    console.log('logout')
    this.router.navigate(['login']);
  }

  registration() { }
}
