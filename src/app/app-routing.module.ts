import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {SignUpComponent} from "./components/sign-up/sign-up.component";
import {SignInComponent} from "./components/sign-in/sign-in.component";
import {CoursesComponent} from "./components/courses/courses.component";
import {LandingComponent} from "./components/landing/landing.component";
import {Page404Component} from "./components/page404/page404.component";
import {GamesComponent} from "./components/games/games.component";
import {AddCourseComponent} from "./components/add-course/add-course.component";
import {TestGame1Component} from "./components/test-game1/test-game1.component";
import {TestGame2Component} from "./components/test-game2/test-game2.component";
import {TestGame3Component} from "./components/test-game3/test-game3.component";
import {NaturalWorldComponent} from "./components/natural-world/natural-world.component";
import {TestGame4Component} from "./components/test-game4/test-game4.component";
import {TestGame5Component} from "./components/test-game5/test-game5.component";
import {TestGame6Component} from "./components/test-game6/test-game6.component";
import {TypingGameComponent} from "./components/typing-game/typing-game.component";
import {TtsComponent} from "./components/tts/tts.component";
import {ReadingComponent} from "./components/reading/reading.component";
import {WrittingComponent} from "./components/writting/writting.component";
import {ToolsComponent} from "./components/tools/tools.component";
import {TtiComponent} from "./components/tti/tti.component";
import {OcrComponent} from "./components/ocr/ocr.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {SchoolCoursesComponent} from "./components/school-courses/school-courses.component";
import {Course1Component} from "./components/course1/course1.component";
import {Course2Component} from "./components/course2/course2.component";
import {Txt1Component} from "./components/txt1/txt1.component";
import {Txt2Component} from "./components/txt2/txt2.component";
import {AssociationImagesComponent} from "./components/association-images/association-images.component";
import {QuestionComponent} from "./components/quiz/question/question.component";
import {ResultComponent} from "./components/quiz/result/result.component";
import {SttComponent} from "./components/stt/stt.component";



const routes: Routes = [
  {path:'',component:LandingComponent},
  {path:'home',component:HomeComponent},
  {path:'register',component:SignUpComponent},
  {path:'login', component: SignInComponent},
  {path:'courses',component:CoursesComponent},
  {path:'games',component:GamesComponent},
  {path:'logout',component:Page404Component},
  {path:'add-course',component:AddCourseComponent},
  {path:'test-game1', component:TestGame1Component},
  {path:'test-game2',component:TestGame2Component},
  {path:'test-game3', component:TestGame3Component},
  {path:'natural-world', component:NaturalWorldComponent},
  {path:'test-game4', component:TestGame4Component},
  {path:'test-game5', component:TestGame5Component},
  {path:'test-game6',component:TestGame6Component},
  {path:'games/typing-game',component:TypingGameComponent},
  {path:'writting',component:WrittingComponent},
  {path:'reading',component:ReadingComponent},
  {path:'tts',component:TtsComponent},
  {path:'tools',component:ToolsComponent},
  {path:'tti',component:TtiComponent},
  {path:'ocr',component:OcrComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'school-courses',component:SchoolCoursesComponent},
  {path:'course1',component:Course1Component},
  {path:'course2',component:Course2Component},
  {path:'txt1',component:Txt1Component},
  {path:'txt2',component:Txt2Component},
  {path:'associationImages',component:AssociationImagesComponent},
  { path: 'question/:id', component: QuestionComponent },
  {path:'result', component:ResultComponent},
  {path:'stt', component:SttComponent},

  {path:'**',component:Page404Component},





]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
