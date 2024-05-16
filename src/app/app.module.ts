import {Component, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { HomeComponent } from './components/home/home.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
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
import { TypingGameComponent } from './components/typing-game/typing-game.component';
import { TtsComponent } from './components/tts/tts.component';
import { ReadingComponent } from './components/reading/reading.component';
import { WrittingComponent } from './components/writting/writting.component';
import { ToolsComponent } from './components/tools/tools.component';
import { CompComponent } from './components/comp/comp.component';
import { TtiComponent } from './components/tti/tti.component';
import { OcrComponent } from './components/ocr/ocr.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SchoolCoursesComponent } from './components/school-courses/school-courses.component';
import { Course1Component } from './components/course1/course1.component';
import { Course2Component } from './components/course2/course2.component';
import { Txt1Component } from './components/txt1/txt1.component';
import { Txt2Component } from './components/txt2/txt2.component';
import { QuestionComponent } from './components/quiz/question/question.component';
import { ResultComponent } from './components/quiz/result/result.component';
import { AssociationImagesComponent } from './components/association-images/association-images.component';
import { SttComponent } from './components/stt/stt.component';


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
    TypingGameComponent,
    TtsComponent,
    ReadingComponent,
    WrittingComponent,
    ToolsComponent,
    CompComponent,
    TtiComponent,
    OcrComponent,
    DashboardComponent,
    SchoolCoursesComponent,
    Course1Component,
    Course2Component,
    Txt1Component,
    Txt2Component,
    QuestionComponent,
    ResultComponent,
    AssociationImagesComponent,
    SttComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
