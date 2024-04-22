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
  {path:'**',component:Page404Component},




]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
