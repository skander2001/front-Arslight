import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private url = 'http://localhost:8000/api/courses/';
  constructor(private http:HttpClient) { }
  getCourses(): Observable<any[]>{

    return this.http.get<any[]>(this.url);
  }

  addCourse(courseData: any): Observable<any>{
    return this.http.post<any>(this.url, courseData);
  }

}
