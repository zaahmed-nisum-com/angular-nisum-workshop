import { Component, Input, OnInit } from '@angular/core';
import { LoggerService } from 'src/app/services/logger/logger.service';

interface sideBar {
  id: number;
  title: string;
  link: string;
  icon: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Input() sideBar: sideBar[] = [];

  constructor(public logger: LoggerService) {}

  opened: Boolean = false;
  authrized: Boolean = true;

  handleToggleDrawer() {
    this.opened = !this.opened;
  }

  ngOnInit(): void {
    this.logger.logg();
  }
}
