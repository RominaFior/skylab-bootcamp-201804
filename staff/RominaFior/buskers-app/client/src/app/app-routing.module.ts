import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";
import { LandingComponent } from './components/landing/landing.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component'
import { ProfileComponent } from './components/profile/profile.component'


const routes : Routes = [
  { path: '', component: LandingComponent},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent }
 ]


 @NgModule({
  imports: [
    RouterModule.forRoot(routes)
],
  exports: [RouterModule]
})
export class AppRoutingModule {}
