import { Component, OnInit, Input } from '@angular/core';
import { Users } from 'src/app/interfaces/Users';
export interface PeriodicElement {
  id: number;
  firstName: string;
  lastName: string;
  weight: number;
  symbol: string;
  createdAt: Date;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {
    id: 1,
    firstName: 'zain',
    lastName: 'ahmed',
    weight: 1.0079,
    symbol: 'H',
    createdAt: new Date(),
  },
  {
    id: 2,
    firstName: 'arsalan',
    lastName: 'ahmed',
    weight: 4.0026,
    symbol: 'He',
    createdAt: new Date(),
  },
  {
    id: 3,
    firstName: 'faraz',
    lastName: 'ahmed',
    weight: 6.941,
    symbol: 'Li',
    createdAt: new Date(),
  },
];
interface users {
  id: number;
  firstName: string;
  lastName: string;
  role:string,
  createdAt:string
}
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  @Input() users: users[] = [];
  @Input() tableColumns: string[] = [];
  constructor() {
    console.log('users=>', this.users);
  }

  dataSource: Users[] = [];
  displayedColumns: string[] = [];

  ngOnInit(): void {
    console.log(this.users, 'ngOnInit');
    this.dataSource = this.users;
    console.log(this.tableColumns, 'headerColumns');
    this.displayedColumns = this.tableColumns;
    console.log(this.displayedColumns)
  }
}
