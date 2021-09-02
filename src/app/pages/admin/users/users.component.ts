import { Component, OnInit, Output, ViewChild } from '@angular/core';
import { Users } from 'src/app/interfaces/Users';
import timeclock from 'src/app/observables/time-clock/time-clock-observable';
import { UserService } from 'src/app/services/users/user.service';
import geolocationObservable from '../../../observables/geolocation-observable/geolocation-observable';
import { TableComponent } from '../../../components/table/table.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  users: Users[] = [];
  timerClock: any = '';
  timeWatch: any = null;
  newUser: any = {
    id: '',
    firstName: '',
    lastName: '',
    role: '',
  };
  isUpdateing: Boolean = false;

  tableColumns: string[] = [
    'id',
    'firstName',
    'lastName',
    'role',
    'createdAt',
    'actions',
  ];
  updateUserRec: Users[] = [];

  // locationsSubscription = geolocationObservable.subscribe({
  //   next(position) {
  //     console.log("unsubscribe position")
  //     console.log('Current Position: ', position);
  //   },
  //   error(msg) {
  //     console.log("unsubscribe error")
  //     console.log('Error Getting Location: ', msg);
  //   }
  // });

  constructor(public userService: UserService) {}

  runObservers() {
    this.timeWatch = timeclock.subscribe((value) => {
      this.timerClock = value;
    });
  }

  ngOnInit(): void {
    this.getUsers();
  }

  handleinput(event: any, label: string) {
    this.newUser[label] = event.target.value as string;
  }

  getUsers() {
    this.users = [...this.userService.getUsers()];
  }

  addUser() {
    if (!this.isUpdateing) {
      this.newUser.id = this.users.length + 1;
      this.newUser.CreatedAt = '12-12-12';
      this.userService.addUsers(this.newUser);
      this.newUser = {
        firstName: '',
        lastName: '',
        role: '',
      };
    }
    if (this.isUpdateing) {
      this.userService.updateUsers(this.updateUserRec);
      this.users = [...this.userService.getUsers()];
      this.isUpdateing = false;
    }
    this.getUsers();
  }

  updateHandle(updateItemIndex: any) {
    let updateingUser = this.users.filter((item) => item.id == updateItemIndex);
    this.newUser.id = updateingUser[0].id;
    this.newUser.firstName = updateingUser[0].firstName;
    this.newUser.lastName = updateingUser[0].lastName;
    this.newUser.role = updateingUser[0].role;
    this.updateUserRec = this.newUser;
    this.isUpdateing = true;
  }

  deleteHandle(newItem: any) {
    this.userService.deleteUser(newItem);
    this.getUsers();
  }
}
