import { Component, OnInit } from '@angular/core';
import { authRegistration } from 'src/app/interfaces/Auth';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registrationObj: authRegistration = {
    firstName:'',
    lastName:'',
    email: '',
    password: '',
  };

  constructor(public authService: AuthService) {}

  handleinput(event: any, label: any) {
    this.registrationObj[label] = event.target.value;
  }
  ngOnInit(): void {
  }

}
