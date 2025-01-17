import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { Component } from './standalone-shim';
import { all } from './utils';

// Options for importing esm modules
import { NavbarComponent, SidebarComponent } from './shell';
// import * as shell from '@demo/shell';
import * as shell from './shell';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [
    // NavbarComponent, 
    // SidebarComponent,
    ...Object.keys(shell) as any[],
    HomeComponent,
    AboutComponent,
    HttpClientModule,
    RouterModule.forRoot([
      { 
        path: '', 
        pathMatch: 'full', 
        component: HomeComponent 
      },
      { 
        path: 'about', 
        component: AboutComponent 
      },
      // { 
      //   path: 'flight-booking', 
      //   loadChildren: () => 
      //       import('./booking/flight-booking.component')
      //         .then(m => m.FlightBookingComponent['module'])
      // }
      { 
        path: 'flight-booking', 
        loadChildren: () => 
          import('@demo/booking')
            .then(m => m.FlightBookingComponent['module'])
      }

    ])
  
  ],
  template: require('./app.component.html')
})
export class AppComponent {
}
