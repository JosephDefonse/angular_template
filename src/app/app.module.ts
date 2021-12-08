import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';


// const appRoutes: Routes = [
//   { path: 'home', component: HomeComponent, data: { title: 'Home' } },
//   { path: 'signup', component: SignupComponent, data: { title: 'Signup' } },
//   { path: 'dashboard', component: DashboardComponent, data: { title: 'Dashboard' } }
// ];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
	NgbModule.forRoot(),
	FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
