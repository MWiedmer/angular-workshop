import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {CoreModule} from './core/core.module';
import {FlightSearchComponent} from './pages/flight-search/flight-search.component';
import {HomeComponent} from './pages/home/home.component';
import {SharedModule} from './shared/shared.module';
import { FlightCardComponent } from './pages/flight-search/components/flight-card/flight-card.component';
import { BasketComponent } from './pages/flight-search/components/basket/basket.component';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './pages/components/not-found/not-found-component';
import { FlightEditComponent } from './pages/flight-edit/flight-edit.component';
import {FlightResolver} from './core/flight-resolver';
import {AuthGuard} from './core/auth.guard';
import { ErrorMessageComponent } from './error-message/error-message.component';

const APP_ROUTES = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'flight-search',
    component: FlightSearchComponent
    // canActivate: [AuthGuard]
  },
  {
    path: 'flight-edit/:id',
    component: FlightEditComponent,
    resolve: {flight: FlightResolver}
  },
  {
    path: 'errorPage404',
    component: NotFoundComponent
  },
  {
    path: '**',
    redirectTo: 'errorPage404'
  }
];


@NgModule({
  declarations: [
    // Components
    // Directives
    // Pipes
    AppComponent,
    HomeComponent,
    FlightSearchComponent,
    FlightCardComponent,
    BasketComponent,
    NotFoundComponent,
    FlightEditComponent,
    ErrorMessageComponent
  ],
  exports: [
    // Modules
    // Components
    // Directives
  ],
  imports: [
    // Modules
    BrowserModule,
    CoreModule,
    SharedModule,
    FormsModule,
    RouterModule.forRoot(APP_ROUTES),
    ReactiveFormsModule
  ],
  providers: [
    // Services
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
