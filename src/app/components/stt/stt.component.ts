import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-stt',
  templateUrl: './stt.component.html',
  styleUrl: './stt.component.css'
})
export class SttComponent {
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
    // Show loading indicator
    this.loading = true;

    // Simulate delay of 2 seconds
    setTimeout(() => {
      // Hide loading indicator
      this.loading = false;

      // Update response paragraphs
      this.responseParagraphs = ["Merci d'utiliser notre service"];
    }, 2000);

  }


}
