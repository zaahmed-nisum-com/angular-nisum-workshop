import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
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
export class TableComponent implements OnInit {
  @Input() users: users[] = [];
  @Input() tableColumns: string[] = [];
  @Output() newItemEvent = new EventEmitter<string>();
  @Output() updateItemEvent = new EventEmitter<string>();

  constructor(private ChangeDetectorRef: ChangeDetectorRef) { }

  dataSource: Users[] = [];
  displayedColumns: string[] = [];

  ngOnInit(): void {
    this.dataSource = this.users;
    this.displayedColumns = this.tableColumns;
    this.refresh()
  }

  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }
  updateItem(value: string) {
    // console.log(value)
    this.updateItemEvent.emit(value);
  }

  refresh() {
    this.ChangeDetectorRef.detectChanges()
  }
}
