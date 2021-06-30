import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/interfaces/Users';
import { UserService } from 'src/app/services/users/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  users: Users[] = [];

  constructor(public userService: UserService) {}

  ngOnInit(): void {
    this.users = this.userService.getUsers();
    console.log(this.users);
  }
}
