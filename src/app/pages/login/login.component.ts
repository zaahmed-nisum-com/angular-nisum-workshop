import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { authLogin } from '../../interfaces/Auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginObj: authLogin = {
    email: '',
    password: '',
  };

  constructor(public authService: AuthService) {}

  handleinput(event: any, label: any) {
    this.loginObj[label] = event.target.value;
  }

  handleLogin() {}

  ngOnInit(): void {}
}
