import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  sideBar = [
    { id: 1, title: 'User List', link: '/users', icon: 'add icon' },
    { id: 2, title: 'Event List', link: '/events', icon: 'add icon' },
    { id: 3, title: 'Products List', link: '/products', icon: 'add icon' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
