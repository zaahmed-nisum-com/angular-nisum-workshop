import { Injectable } from '@angular/core';
import { users } from '../../../fakedata';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  getUsers() {
    return users;
  }
  deleteUser(index: number) {
    users.splice(index - 1, 1);
  }
  addUsers(data: {}) {
    users.push(data);
  }
}
