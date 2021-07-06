import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {
  position: number;
  firstName: string;
  lastName: string;
  weight: number;
  symbol: string;
  createdAt:Date
}
const ELEMENT_DATA: PeriodicElement[] = [
  {
    position: 1,
    firstName: 'zain',
    lastName: 'ahmed',
    weight: 1.0079,
    symbol: 'H',
    createdAt:new Date
  },
  {
    position: 2,
    firstName: 'arsalan',
    lastName: 'ahmed',
    weight: 4.0026,
    symbol: 'He',
    createdAt:new Date
  },
  {
    position: 3,
    firstName: 'faraz',
    lastName: 'ahmed',
    weight: 6.941,
    symbol: 'Li',
    createdAt:new Date
  },
];
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  constructor() {}

  dataSource = ELEMENT_DATA;
  displayedColumns: string[] = [
    'position',
    'firstName',
    'lastName',
    'weight',
    'symbol',
    'createdAt',
  ];

  ngOnInit(): void {}
}
