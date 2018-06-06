import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomepageComponent } from './homepage/homepage.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { CategoriesComponent } from './homepage/categories/categories.component';
import { ScheduleComponent } from './homepage/schedule/schedule.component';
import { TopTenComponent } from './homepage/top-ten/top-ten.component';
import { ArtistsNearYouComponent } from './homepage/artists-near-you/artists-near-you.component';

const routes : Routes = [
    { path: '', component: HomepageComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent },
    { path: 'categories', component: CategoriesComponent },
    { path: 'schedule', component: ScheduleComponent },
    { path: 'topten', component: TopTenComponent },
    { path: 'artistsnearyou', component: ArtistsNearYouComponent },
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}