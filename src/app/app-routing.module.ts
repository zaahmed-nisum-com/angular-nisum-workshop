import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from './guard/auth-guard.guard';
import { AdminComponent } from './pages/admin/admin.component';
import { EventsComponent } from './pages/admin/events/events/events.component';
import { ProductsComponent } from './pages/admin/products/products/products.component';
import { UsersComponent } from './pages/admin/users/users.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { PostsComponent } from './pages/user/posts/posts.component';

const routes: Routes = [
  { path: '', component: LoginComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: RegistrationComponent },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuardGuard],
    children: [
      {
        path: 'events', // child route path
        component: EventsComponent, // child route component that the router renders
      },
      {
        path: 'posts', // child route path
        component: PostsComponent, // child route component that the router renders
      },
      {
        path: 'products',
        component: ProductsComponent, // another child route component that the router renders
      },
      {
        path: 'users',
        component: UsersComponent, // another child route component that the router renders
      },
      {
        path: '',
        component: UsersComponent, // another child route component that the router renders
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent, RegistrationComponent];
