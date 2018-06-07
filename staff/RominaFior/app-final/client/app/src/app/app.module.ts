import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 

/* import { AppComponent } from './app.component'; */
/* import { CalendarComponent } from './calendar/calendar.component'; */
/* import { AppRoutingModule } from './app-routing-.module'; */
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component'
import { RootComponent } from './root/root.component';
import { ROUTING } from '../app.routing';

@NgModule({
  declarations: [
    /* AppComponent, */
    RootComponent,
   /*  CalendarComponent, */
    HomeComponent,
    LoginComponent

  ],
  imports: [
    BrowserModule,
    ROUTING,
    FormsModule,
    HttpClientModule
    /* AppRoutingModule */
    
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class AppModule { }
