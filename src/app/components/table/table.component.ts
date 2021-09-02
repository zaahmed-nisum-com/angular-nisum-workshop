import {
  Component,
  OnInit,
  Input,
  Output,
  OnChanges,
  EventEmitter,
  ChangeDetectorRef,
} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
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
  dataSource = new MatTableDataSource<any>();
  get handle():any {
    return this.users;
  }

  @Input() set handle(value: any) {
    console.log(value, 'value');
    this.dataSource.data = value;
  }
  @Input() users: Users[] = [];
  @Input() tableColumns: string[] = [];
  @Output() newItemEvent = new EventEmitter<string>();
  @Output() updateItemEvent = new EventEmitter<string>();
  // @Output() updateNew__ = new EventEmitter<string>();

  constructor() {}

  displayedColumns: string[] = [];

  
  ngOnInit(): void {
    this.dataSource.data = this.users;
    this.displayedColumns = this.tableColumns;
  }

  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }
  updateItem(value: string) {
    // console.log(value)
    this.updateItemEvent.emit(value);
  }

  updateNew() {
    this.dataSource.data = this.users;
    // this.updateNew__.emit();
  }

  // refresh() {
  //   this.ChangeDetectorRef.detectChanges()
  // }
}
