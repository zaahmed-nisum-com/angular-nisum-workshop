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
  isUpdateing: Boolean = false

  tableColumns: string[] = [
    'id',
    'firstName',
    'lastName',
    'role',
    'createdAt',
    'actions',
  ];

  constructor(public userService: UserService) { }

  ngOnInit(): void {
    this.getUsers();
    // console.log('users=> user components', this.users);
  }

  handleinput(event: any, label: string) {
    this.newUser[label] = event.target.value as string;
  }

  getUsers() {
    this.users = this.userService.getUsers();
    console.log(this.users);
  }

  addUser() {
    this.userService.addUsers(this.newUser);
    this.getUsers();
  }

  updateHandle(updateItemIndex: any) {
    let updateingUser = this.users.filter(item => item.id == updateItemIndex);
    console.log(updateingUser)
    this.newUser.firstName = updateingUser[0].firstName;
    this.newUser.lastName = updateingUser[0].lastName
    this.newUser.role = updateingUser[0].role;
    this.isUpdateing = true
    console.log(this.newUser)
  }

  deleteHandle(newItem: any) {
    this.userService.deleteUser(newItem);
    this.getUsers();
  }


}
