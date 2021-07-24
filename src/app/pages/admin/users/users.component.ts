import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/interfaces/Users';
import timeclock from 'src/app/observables/time-clock/time-clock-observable';
import { UserService } from 'src/app/services/users/user.service';
import geolocationObservable from '../../../observables/geolocation-observable/geolocation-observable'

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



  constructor(public userService: UserService) { }

  runObservers() {
    this.timeWatch = timeclock.subscribe((value) => {
      this.timerClock = value
    })
  }

  ngOnInit(): void {
    this.runObservers()
    setTimeout(() => {
      this.timeWatch.unsubscribe();
    }, 10000);
  }

  handleinput(event: any, label: string) {
    this.newUser[label] = event.target.value as string;
  }

  getUsers() {
    // this.users = this.userService.getUsers();
    console.log(this.users);
  }

  addUser() {
    console.log(this.newUser)
    console.log(this.users)
    this.users.push({
      ...this.newUser
    })
    this.newUser = {
      firstName: '',
      lastName: '',
      role: '',
    }
    // this.userService.addUsers(this.newUser);
    this.getUsers();
  }

  updateHandle(updateItemIndex: any) {
    let updateingUser = this.users.filter(item => item.id == updateItemIndex);
    this.newUser.firstName = updateingUser[0].firstName;
    this.newUser.lastName = updateingUser[0].lastName
    this.newUser.role = updateingUser[0].role;
    this.isUpdateing = true
  }

  deleteHandle(newItem: any) {
    this.userService.deleteUser(newItem);
    this.getUsers();
  }


}
