import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  addUserForm: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    last_name: new FormControl('', [Validators.required]),
    first_name: new FormControl('', [Validators.required]),
    cfn: new FormControl('',),
    cln: new FormControl('',),
    email: new FormControl('', [Validators.required, Validators.email]),
    gender: new FormControl('', Validators.required),
    tel: new FormControl('', [Validators.required]),
    lvl: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(3)]),
    confirmPassword: new FormControl('', [Validators.required, Validators.minLength(3)]),
    role: new FormControl('', Validators.required)
  });

  constructor(private dataService: AuthService) {}

  ngOnInit(): void {}

  activeButton: string = '';
  data: any;

  onSubmit(): void {
    let formData = this.addUserForm.value;
    let url: string;
    switch (formData.role.toLowerCase()) {
      case 'enseignant':
        url = 'http://127.0.0.1:8000/api/teacher/register/';
        this.data = {
          "user": {
            "username": formData.username,
            "email": formData.email,
            "password": formData.password,
            "role": "teacher",
            "tel": formData.tel,
            "gender": formData.gender,
          },
          "first_name": formData.first_name,
          "last_name": formData.last_name,
          "student": null
        }

        break;
      case 'parent':
        url = 'http://127.0.0.1:8000/api/parent/register/';
        this.data = {
          "user": {
            "username": formData.username,
            "email": formData.email,
            "password": formData.password,
            "role": "parent",
            "gender": formData.gender,
          },
          "first_name": formData.first_name,
          "last_name": formData.last_name,
          "student": {
            "user":{
              username:"std_"+formData.username,
              email: formData.email,
              password:formData.password,
              role:"student",
              gender:formData.gender,
            },
            "child_first_name": formData.cfn,
            "child_last_name": formData.cln,
            "level": formData.lvl,
            }
          }

        break;
      case 'orthophoniste':
        url = 'http://127.0.0.1:8000/api/ortho/register/';
        this.data = {
          "user": {
            "username": formData.username,
            "email": formData.email,
            "password": formData.password,
            "role": "orthophoniste",
            "gender": formData.gender,
          },
          "first_name": formData.first_name,
          "last_name": formData.last_name,
          "student": null
        }
        break;
      default:
        // Default URL or error handling
        console.error('Invalid role.');
        return; // Exit the function
    }

    this.dataService.createUser(this.data, url).subscribe(
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
