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
import {CategoryComponent} from "./category/category.component";
import {SpecicalComponent} from "./category/specical.component";
import {MatButtonModule} from "@angular/material/button";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ReactiveFormsModule} from "@angular/forms";

const appRoutes: Routes = [
  {path: '', component: CurrentweatherComponent},
  {path: 'about-us', component: AboutusComponent},
  {path: 'user-login', component: UserloginComponent},
  {path: 'user-signup', component: UsersignupComponent},
  {path: 'specical', component: SpecicalComponent}
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
    UsersignupComponent,
    CategoryComponent,
    SpecicalComponent

  ],
  imports: [
    BrowserModule, FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes), MatButtonModule, BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
