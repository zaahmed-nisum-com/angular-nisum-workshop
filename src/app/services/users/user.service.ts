import { Injectable } from '@angular/core';
import { users } from '../../../fakedata';
import { HttpService } from '../http/http.service';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private httpService: HttpService) {}

  getUsers() {
   const a =  this.httpService
      .fetchApi('https://jsonplaceholder.typicode.com/users')
      .subscribe((data) => {
        return users;
      });
    return users;
  }
  deleteUser(index: number) {
    users.splice(index - 1, 1);
  }
  addUsers(data: {}) {
    users.push(data);
  }
}
