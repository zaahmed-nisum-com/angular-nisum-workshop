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
  newUser: any = {
    firstName: '',
    lastName: '',
    role: '',
  };

  tableColumns: string[] = [
    'id',
    'firstName',
    'lastName',
    'role',
    'createdAt',
    'actions',
  ];

  constructor(public userService: UserService) {}

  ngOnInit(): void {
    this.getUsers();
    // console.log('users=> user components', this.users);
  }

  getUsers() {
    this.users = this.userService.getUsers();
    console.log(this.users);
  }

  handleinput(event: any, label: string) {
    this.newUser[label] = event.target.value as string;
  }

  deleteHandle(newItem: any) {
    this.userService.deleteUser(newItem);
    this.getUsers();
  }

  addUser() {
    this.userService.addUsers(this.newUser);
    this.getUsers();
  }
}
