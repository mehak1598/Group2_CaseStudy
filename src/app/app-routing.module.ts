import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { BookStoreComponent } from './bookstore/bookstore.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  
  {path:"login", component: LoginComponent},
  {path:"bookstore", component:BookStoreComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
