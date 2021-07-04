import { Component, OnInit } from '@angular/core';
import { LoggerService } from 'src/app/services/logger/logger.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(public logger: LoggerService) {}

  opened: Boolean = false;

  handleToggleDrawer() {
    this.opened = !this.opened;
  }

  ngOnInit(): void {
    this.logger.logg();
  }
}
