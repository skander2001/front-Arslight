import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private http: HttpClient) { }

  predictFr(image: File): Observable<any> {
    const formData = new FormData();
    formData.append('image', image);

    return this.http.post<any>('http://localhost:8000/api/Fr', formData);
  }

  predictDigits(image: File): Observable<any> {
    const formData = new FormData();
    formData.append('image', image);

    return this.http.post<any>('http://localhost:8000/api/Digits', formData);
  }

  predictArabic(image: File): Observable<any> {
    const formData = new FormData();
    formData.append('image', image);

    return this.http.post<any>('http://localhost:8000/api/Arabe', formData);
  }


}
