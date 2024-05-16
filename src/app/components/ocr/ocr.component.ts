// Angular Component (OcrComponent)

import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ocr',
  templateUrl: './ocr.component.html',
  styleUrls: ['./ocr.component.css']
})
export class OcrComponent {
  loading = false;
  languageSelect = 'ar';
  file: File | null = null;
  languages = [
    { name: 'English', value: 'en' },
    { name: 'French', value: 'fr' },
    { name: 'Arabic', value: 'ar' }
  ];
  responseParagraphs: string[] = [];

  constructor(private http: HttpClient) {}

  onFileChange(event: any) {
    this.file = event.target.files[0];
  }

  updateSelectedLanguage(event: Event) {
    const selectedValue = (event.target as HTMLSelectElement).value;
    if (selectedValue !== null && selectedValue !== undefined) {
      this.languageSelect = selectedValue;
    }
  }

  convertToText() {
    if (!this.file) {
      console.error('No file selected.');
      return;
    }

    this.loading = true;

    const formData = new FormData();
    formData.append('file', this.file);
    formData.append('language', this.languageSelect); // Add selected language

    this.http.post<any>('http://localhost:8000/api/ocr', formData).subscribe(
      response => {
        console.log('OCR Response:', response);
        this.responseParagraphs = response.paragraphs;

        this.loading = false;
      },
      error => {
        console.error('Error:', error);
        this.loading = false;
      }
    );
  }
}
