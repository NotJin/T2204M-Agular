import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {StudentComponent} from "./student/student.component";
import {ClassroomComponent} from "./classRoom/classRoom.component";
import {CurrentweatherComponent} from "./curentweather/curent.weather.component";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {CurentWeatherforecastComponent} from "./weatherforecast/curent.weatherforecast.component";
import {RouterModule, Routes} from "@angular/router";
import {AboutusComponent} from "./aboutus/aboutus.component";
import {UserloginComponent} from "./user/userlogin.coponent";
import {UsersignupComponent} from "./user/usersignup.component";

const appRoutes: Routes = [
  {path: '', component: CurrentweatherComponent},
  {path: 'about-us', component: AboutusComponent},
  {path: 'user-login', component: UserloginComponent},
  {path: 'user-signup', component: UsersignupComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    ClassroomComponent,
    CurrentweatherComponent,
    CurentWeatherforecastComponent,
    AboutusComponent,
    UserloginComponent,
    UsersignupComponent
  ],
  imports: [
    BrowserModule,FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
