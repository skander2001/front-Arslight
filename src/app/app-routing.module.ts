import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {SignUpComponent} from "./components/sign-up/sign-up.component";
import {SignInComponent} from "./components/sign-in/sign-in.component";
import {CoursesComponent} from "./components/courses/courses.component";
import {LandingComponent} from "./components/landing/landing.component";
import {Page404Component} from "./components/page404/page404.component";
import {GamesComponent} from "./components/games/games.component";

const routes: Routes = [
  {path:'',component:LandingComponent},
  {path:'home',component:HomeComponent},
  {path:'register',component:SignUpComponent},
  {path:'login', component: SignInComponent},
  {path:'courses',component:CoursesComponent},
  {path:'games',component:GamesComponent},
  ]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
