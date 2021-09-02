import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
} from '@angular/core';
import { Users } from 'src/app/interfaces/Users';

interface users {
  id: number;
  firstName: string;
  lastName: string;
  role: string;
  createdAt: string;
}
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit, OnChanges {
  @Input() users: users[] = [];
  @Input() tableColumns: string[] = [];
  @Output() newItemEvent = new EventEmitter<string>();
  @Output() updateItemEvent = new EventEmitter<string>();
  // @Output() updateNew__ = new EventEmitter<string>();

  constructor() {}

  displayedColumns: string[] = [];
  dataSource: Users[] = [];

  ngOnInit(): void {
    this.dataSource = this.users;
    this.displayedColumns = this.tableColumns;
  }

  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }
  updateItem(value: string) {
    this.updateItemEvent.emit(value);
  }

  ngOnChanges() {
    console.log("ngOnChanges")
    /**********THIS FUNCTION WILL TRIGGER WHEN PARENT COMPONENT UPDATES 'someInput'**************/
    //Write your code here
    this.dataSource = this.users;
  }
}
