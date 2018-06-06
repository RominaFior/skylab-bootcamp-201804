import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, FormControl, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from "@angular/common/http";

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ArtistComponent } from './models/artist/artist.component';
import { EventComponent } from './models/event/event.component';
import { AppRoutingModule} from './app-routing-.module';
 import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CategoriesComponent } from './homepage/categories/categories.component';
import { ScheduleComponent } from './homepage/schedule/schedule.component';
import { TopTenComponent } from './homepage/top-ten/top-ten.component';
import { ArtistsNearYouComponent } from './homepage/artists-near-you/artists-near-you.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component' 


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ArtistComponent,
    EventComponent,
    HeaderComponent,
    FooterComponent,
    CategoriesComponent,
    ScheduleComponent,
    TopTenComponent,
    ArtistsNearYouComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    HttpClient
  ], //nuestro axios se guardara aqui
  bootstrap: [AppComponent]
})
export class AppModule { }