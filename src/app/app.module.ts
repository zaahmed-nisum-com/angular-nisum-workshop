import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input'
import {MatButtonModule} from '@angular/material/button'
import {MatIconModule} from '@angular/material/icon'
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTableModule} from '@angular/material/table'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UsersComponent } from './pages/admin/users/users.component';
import { UserCardComponent } from './components/cards/user-card/user-card.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { DrawerComponent } from './components/drawer/drawer.component';
import { TableComponent } from './components/table/table.component';
import { LayoutComponent } from './layout/layout.component';
import { ItemComponent } from './components/table/components/item/item.component';
import { FirstWordCapitalPipe } from './pipes/first-word-capital/first-word-capital.pipe';
import { PipesModule} from './pipes/multipipes/pipes.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    UsersComponent,
    UserCardComponent,
    LoginComponent,
    RegistrationComponent,
    DrawerComponent,
    TableComponent,
    LayoutComponent,
    ItemComponent,
    FirstWordCapitalPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatGridListModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatTableModule,
    MatSidenavModule,
    PipesModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
