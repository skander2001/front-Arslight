import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CoursesService } from "../../services/courses.service";

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent {
  courseForm: FormGroup;
  loggedInUserId: number = 1;
  fileName: string ="";

  constructor(private formBuilder: FormBuilder, private coursesService: CoursesService) {
    this.courseForm = this.formBuilder.group({
      title: ['', Validators.required],
      level: ['', Validators.required],
      file: [null], // Remove Validators.required for file field
      summary: ['', Validators.required]
    });
  }

  addCourse(): void {
    if (this.courseForm.valid) {
      const formData = new FormData();
      formData.append('title', this.courseForm.value.title);
      formData.append('summary', this.courseForm.value.summary);
      formData.append('level', this.courseForm.value.level);
      formData.append('teacher', this.loggedInUserId.toString());
      formData.append('file', this.courseForm.value.file); // Append file content here

      // Call your service method to add the course
      this.coursesService.addCourse(formData).subscribe(
        (response) => {
          console.log('Course added successfully:', response);
          // Handle success response
        },
        (error) => {
          console.error('Error adding course:', error);
          // Handle error response
        }
      );
    }
  }

  onFileSelected(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files && inputElement.files.length > 0) {
      const file = inputElement.files[0];
      this.courseForm.patchValue({
        file: file
      });
      this.fileName = file.name;
    } else {
      this.fileName = 'Aucun fichier choisi';
    }
  }
}
