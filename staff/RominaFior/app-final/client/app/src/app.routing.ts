import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
 
import { LoginComponent } from './app/login/login.component';
import { HomeComponent } from './app/home/home.component'
 
export const AppRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent }
];
 
export const ROUTING: ModuleWithProviders = RouterModule.forRoot(AppRoutes);