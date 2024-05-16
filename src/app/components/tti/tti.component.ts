import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tti',
  templateUrl: './tti.component.html',
  styleUrls: ['./tti.component.css']
})
export class TtiComponent {
  imageUrl: string = '';
  searchQuery: string = '';
  errorMessage: string = '';
  loading: boolean = false;

  constructor(private http: HttpClient) { }

  submitSearch(): void {
    this.loading = true;
    const url = 'http://localhost:8000/api/tti';
    const body = { text_prompt: this.searchQuery };

    this.http.post(url, body).subscribe(
      (response: any) => {
        this.display(response.filename, response.image_data);
        this.loading = false;
      },
      (error) => {
        console.error('Error:', error);
        this.errorMessage = 'Error fetching image from server';
        this.loading = false;
      }
    );
  }

  display(filename: string, imageData: string): void {
    this.imageUrl = 'data:image/png;base64,' + imageData;
  }
}
