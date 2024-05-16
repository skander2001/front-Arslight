import { Component, ElementRef } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-tts',
  templateUrl: './tts.component.html',
  styleUrls: ['./tts.component.css']
})
export class TtsComponent {
  textInput = '';
  languageSelect = 'fr';
  audioUrl?: string;
  loading = false;
  generated: boolean = false;


  languages = [
    { name: 'English', value: 'en' },
    { name: 'French', value: 'fr' },
    { name: 'Arabic', value: 'ar' }
  ]

  updateSelectedLanguage(event: Event) {
    const selectedValue = (event.target as HTMLSelectElement).value;
    if (selectedValue !== null && selectedValue !== undefined) {
      this.languageSelect = selectedValue;
    }
  }
  constructor(private http: HttpClient, private elementRef: ElementRef) { }

  convertTextToSpeech() {
    this.loading = true;
    this.generated=false;
    const textInput = this.elementRef.nativeElement.querySelector('#textInput');
    const text = textInput.value.trim(); // Get the value of the input element
    const language = this.languageSelect;
    console.log(language)

    console.log(text + " .." + language);

    // Send POST request to the backend with text and language data
    this.http.post<any>('http://127.0.0.1:8000/api/tts', { text, language })
      .subscribe((response) => {
        console.log(response);
        this.loading = false;
        this.playAudio()// Create a new Blob object
      }, (error) => {
        console.error(error);
        this.loading = false;
      });
  }

  playAudio() {
    setTimeout(() => {
      this.generated=true// Create a new Audio object
      this.audioUrl="assets/sounds/mp3/audio.mp3"

    }, 3000); // Wait for 4 seconds before executing the code inside setTimeout
    }


}
