import { Injectable } from '@angular/core';
import fakedata from '../../../fakedata/fakedata.json';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  getUsers() {
    return fakedata.users;
  }
}
