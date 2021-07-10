import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

interface loginData {
  [key: string]: string;
}
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router) {}

  login(data: loginData) {
    console.log(data.email == 'zaahmed@gmail.com');
    console.log(data.password == '123123');
    if (data.email == 'zaahmed@gmail.com' && data.password == '123123') {
      console.log(data);
      this.router.navigate(['/admin']);
    }
  }

  registration() {}
}
