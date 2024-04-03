import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {SignUpComponent} from "./components/sign-up/sign-up.component";
import {SignInComponent} from "./components/sign-in/sign-in.component";

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'register',component:SignUpComponent},
  {path:'login', component: SignInComponent}
  ]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
