import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LocalstorageService } from 'src/app/localstorage/localstorage.service';

interface loginData {
  [key: string]: string;
}
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private router: Router,
    private localStorageService: LocalstorageService
  ) {}

  login(data: loginData) {
    if (data.email == 'zaahmed@gmail.com' && data.password == '123123') {
      this.localStorageService.addItem('auth', {
        email: 'zaahmed@gmail.com',
        isLogin: true,
        authToken: '81hud29hfu32nf9hfurbegfo3h42hgf',
      });
      this.router.navigate(['/admin']);
    }
  }

  registration() {}
}
