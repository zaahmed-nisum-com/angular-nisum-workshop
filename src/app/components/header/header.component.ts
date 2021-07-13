import { Component, Input, OnInit } from '@angular/core';
import { LocalstorageService } from 'src/app/localstorage/localstorage.service';
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

  constructor(public logger: LoggerService, private localStorageServices: LocalstorageService) { }

  opened: Boolean = false;
  authrized: Boolean = false;

  handleToggleDrawer() {
    this.opened = !this.opened;
  }

  logoutHandle() {
    this.localStorageServices.removeItem('auth');
    this.authrized = false
  }

  ngOnInit(): void {
    this.authrized = this.localStorageServices.getItem('auth').isLogin
    this.logger.logg();
  }
}
