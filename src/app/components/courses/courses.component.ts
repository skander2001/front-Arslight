import {Component, OnInit} from '@angular/core';
import {CoursesService} from "../../services/courses.service";

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent implements OnInit{

  courses: any[] = [];

  constructor(private coursesService: CoursesService) {}

  ngOnInit() {
    this.loadCourses();
  }
  loadCourses() {
    this.coursesService.getCourses().subscribe(
      data => {
        console.log(data); // Optional: Log data to verify
        this.courses = data; // Assign received courses to component property
      },
      error => {
        console.error('Error fetching courses:', error);
        // Handle error, e.g., show error message to the user
      }
    );
  }


}
