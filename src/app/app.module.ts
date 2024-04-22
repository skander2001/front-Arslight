import {Component, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { HomeComponent } from './components/home/home.component';
import {ReactiveFormsModule} from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import {CoursesComponent} from "./components/courses/courses.component";
import { LandingComponent } from './components/landing/landing.component';
import { Page404Component } from './components/page404/page404.component';
import { GamesComponent } from './components/games/games.component';
import { AddCourseComponent } from './components/add-course/add-course.component';
import { NaturalWorldComponent } from './components/natural-world/natural-world.component';
import { TestGame1Component } from './components/test-game1/test-game1.component';
import { TestGame2Component } from './components/test-game2/test-game2.component';
import { TestGame3Component } from './components/test-game3/test-game3.component';
import { TestGame4Component } from './components/test-game4/test-game4.component';
import { TestGame5Component } from './components/test-game5/test-game5.component';
import { TestGame6Component } from './components/test-game6/test-game6.component';


@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    SignInComponent,
    HomeComponent,
    CoursesComponent,
    LandingComponent,
    Page404Component,
    GamesComponent,
    AddCourseComponent,
    NaturalWorldComponent,
    TestGame1Component,
    TestGame2Component,
    TestGame3Component,
    TestGame4Component,
    TestGame5Component,
    TestGame6Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
