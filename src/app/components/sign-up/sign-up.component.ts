import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent implements OnInit{

  addUserForm : FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(3)]),
    role: new FormControl('',Validators.required)
  });

  constructor(private dataService: AuthService) { }
  ngOnInit(): void {}
  activeButton: string = ''; // Initialize active button variable


  onSubmit() : void {
    console.log("form values : ", {
      username: this.addUserForm.value.username,
      email: this.addUserForm.value.email,
      password: this.addUserForm.value.password,
      role: this.addUserForm.value.role
    });
    let formData = {
      username: this.addUserForm.value.username,
      email: this.addUserForm.value.email,
      password: this.addUserForm.value.password,
      role:this.addUserForm.value.role
    }
    this.dataService.createUser(formData).subscribe(
      (res) => {
        console.log(res);
        window.location.href = "/login";
      },
      (err) => {
        console.log(err);
      }
    )
  }


  toggleActive(buttonName: string): void {
    this.activeButton = buttonName === this.activeButton ? '' : buttonName;
    this.addUserForm.get('role')?.setValue(this.activeButton);
  }
}



