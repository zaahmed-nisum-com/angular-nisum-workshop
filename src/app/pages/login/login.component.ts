import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
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

  handleinput(event: any, label: string) {
    this.loginObj[label] = event.target.value as string;
  }

  handleLogin() {
    // console.log(this.loginObj)
    this.authService.login(this.loginObj);
  }

  ngOnInit(): void {}
}
