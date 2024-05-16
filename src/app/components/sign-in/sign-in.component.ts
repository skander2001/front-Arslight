import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent implements OnInit {

  isLoading = false;
  isError : boolean = false;

  loginForm : FormGroup  = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(3)])
  });


  constructor(private dataService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit() : void {
    console.log("form values : ", {
      username: this.loginForm.value.username,
      password: this.loginForm.value.password
    });
    this.isLoading = true;
    let formData = {
      username: this.loginForm.value.username,
      password: this.loginForm.value.password
    }
    this.dataService.logIn(formData).subscribe(
      (res) => {
        console.log(res);
        localStorage.setItem("user", JSON.stringify(res));
        this.isLoading = false;
        var userDataString = localStorage.getItem("user");
        // @ts-ignore
        var userData = JSON.parse(userDataString);
        var userRole = userData.role;

        if(userRole == "Student") {
          window.location.href = "/question/1"
        }else {
          window.location.href = "http://127.0.0.1:5500/instructor-earning.html"
        }





      },
      (err) => {
        this.isLoading = false;
        console.log(err);
        if (err.status === 403){
          this.isError = true;

        }
      }
    )

  }



}
