import {NgModule} from '@angular/core'
import {Routes, RouterModule} from '@angular/router'
import { CalendarComponent } from './calendar/calendar.component'
import { HomeComponent } from './home/home.component'

const routes: Routes = [ //aqui estaran todas nuestras rutas
    { path: '', component: HomeComponent },
    { path: 'calendar', component: CalendarComponent }//hemos creado nuestra primera ruta!
      
] 

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]

})
export class AppRoutingModule {}