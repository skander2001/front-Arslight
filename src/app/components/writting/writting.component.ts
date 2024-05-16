import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ImageService } from "../../services/image.service";

@Component({
  selector: 'app-writting',
  templateUrl: './writting.component.html',
  styleUrls: ['./writting.component.css']
})
export class WrittingComponent implements OnInit {

  @ViewChild('drawingBoard', { static: true }) canvas!: ElementRef<HTMLCanvasElement>;
  private ctx!: CanvasRenderingContext2D;
  private isDrawing: boolean = false;
  private lastX!: number;
  private lastY!: number;

  digit0="/assets/crayon-number/crayon-number-10.png";
  digit1="/assets/crayon-number/crayon-number-1.png";
  digit2="/assets/crayon-number/crayon-number-2.png";

listDigits = [this.digit0,this.digit1,this.digit2];

arabic1: string = "/assets/arabic/ba.png";
arabic2: string = "/assets/arabic/ya.jpeg";
  arabic3: string = "/assets/arabic/waw.jpeg";

listArabic = [this.arabic1,this.arabic2,this.arabic3];
  predictCounter: number = 0;






  strokeColor: string = '#000000'; // Default stroke color
  lineWidth: number = 5; // Default line width

  constructor(private imageService: ImageService) { }

  ngOnInit(): void {
    const canvasElement = this.canvas.nativeElement;
    if (canvasElement) {
      this.ctx = canvasElement.getContext('2d')!;
    } else {
      console.error("Canvas element not found.");
    }
  }
  activeButton: string = '';

  startDrawing(e: MouseEvent) {
    this.isDrawing = true;
    [this.lastX, this.lastY] = [e.offsetX, e.offsetY];
  }

  draw(e: MouseEvent) {
    if (!this.isDrawing) return;
    this.ctx.strokeStyle = this.strokeColor;
    this.ctx.lineWidth = this.lineWidth;
    this.ctx.lineCap = 'round';

    this.ctx.beginPath();
    this.ctx.moveTo(this.lastX, this.lastY);
    this.ctx.lineTo(e.offsetX, e.offsetY);
    this.ctx.stroke();

    [this.lastX, this.lastY] = [e.offsetX, e.offsetY];
  }

  endDrawing() {
    this.isDrawing = false;
  }

  clearCanvas() {
    this.ctx.clearRect(0, 0, this.canvas.nativeElement.width, this.canvas.nativeElement.height);
  }

  saveImage() {
    const canvas: any = document.getElementById('drawing-Board');
    const dataURI= canvas.toDataURL('image/png');
    const a = document.createElement('a');
    document.body.appendChild(a);
    a.href = dataURI;
    a.download = 'canvas_image.png';
    a.click();
    document.body.removeChild(a);
  }

incorrect = false;


  predict() {
    const image = this.canvas.nativeElement.toDataURL('image/png');
    const blob = this.dataURItoBlob(image);
    const file = new File([blob], 'canvas_image.png');
    const formData = new FormData();
    formData.append('image', file);
    this.predictCounter++;
    const isOdd = this.predictCounter % 2 !== 0;
    if (isOdd) {
      alert("Try Again!")
      this.incorrect =true   } else {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.activeList.length;
      this.incorrect= false;
    }


    if (this.activeList.length === 0) {
      console.error('No active list selected.');
      return;
    }


    switch (this.activeButton) {
      case 'Arabic':
        this.imageService.predictArabic(file).subscribe(
          (response) => {
            console.log("Arabic Prediction:", response);
          },
          (error) => {
            console.error('Error predicting Arabic:', error);
          }
        );
        break;
      case 'English':
        this.imageService.predictFr(file).subscribe(
          (response) => {
            console.log("fr/en Prediction:", response);
          },
          (error) => {
            console.error('Error predicting :', error);
          }
        );
        break;
      case 'Digits':
        this.imageService.predictDigits(file).subscribe(
          (response) => {
            console.log("Digits Prediction:", response);
          },
          (error) => {
            console.error('Error predicting Digits:', error);
          }
        );
        break;
      default:
        console.error('Invalid language:', this.activeButton);
        break;
    }
  }

  dataURItoBlob(dataURI: string): Blob {
    const byteString = atob(dataURI.split(',')[1]);
    const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
    const arrayBuffer = new ArrayBuffer(byteString.length);
    const int8Array = new Uint8Array(arrayBuffer);

    for (let i = 0; i < byteString.length; i++) {
      int8Array[i] = byteString.charCodeAt(i);
    }

    return new Blob([arrayBuffer], { type: mimeString });
  }
  activeList: string[] = [];

  toggleActive(buttonName: string): void {
    this.activeButton = buttonName === this.activeButton ? '' : buttonName;

    switch (buttonName) {
      case 'Arabic':
        this.activeList = this.listArabic;
        break;
      case 'English':
      case 'Digits':
        this.activeList = this.listDigits;
        break;
      default:
        console.error('Invalid language:', this.activeButton);
        break;
    }
  }
  currentImageIndex: number = 0;


}
