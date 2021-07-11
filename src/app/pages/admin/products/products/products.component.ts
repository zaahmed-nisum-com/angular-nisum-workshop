import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/interfaces/Users';
import { UserService } from 'src/app/services/users/user.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  users: Users[] = [];
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
    this.users = this.userService.getUsers();
    // console.log('users=> user components', this.users);
  }

  deleteHandle(newItem: any) {
    console.log(this.users[newItem - 1]);
    // console.log('newItem=>', newItem);
  }

}
