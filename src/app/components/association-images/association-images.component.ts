import { Component } from '@angular/core';

@Component({
  selector: 'app-association-images',
  templateUrl: './association-images.component.html',
  styleUrl: './association-images.component.css'
})
export class AssociationImagesComponent {
  images: string[] = ['1.PNG', '2.PNG', '4.PNG', '6.PNG'];
  texts: string[] = [' ﻣَﻜْﺘَﺐٌ' , 'ﻣِﺼْﻄَﺒَﺔٌ', 'ﺣَﺎﺳُﻮﺏٌ', 'ﻃَﺒَﺎﺷِﻴﺮُ'];
  draggedTextIndex: number | null = null;
  showAlert: boolean = false;
  message: string | null = null;
  isCorrect: boolean = false; // Ajout de la propriété isCorrect

  startDragging(event: DragEvent, textIndex: number) {
    event.dataTransfer?.setData('textIndex', textIndex.toString());
    this.draggedTextIndex = textIndex;
  }

  allowDrop(event: DragEvent) {
    event.preventDefault();
  }

  drop(event: DragEvent, imageIndex: number) {
    event.preventDefault();
    const textIndex = parseInt(event.dataTransfer?.getData('textIndex') || '');
    this.isCorrect = textIndex === imageIndex; // Calcul de isCorrect
    if (this.isCorrect) {
      this.message = `The link between the image  ${imageIndex + 1} and  "${this.texts[textIndex]}" is correct !.`;
    } else {
      this.message = `The link between the image${imageIndex + 1} and "${this.texts[textIndex]}" is incorrect !.`;
    }
    this.showAlert = true; // Afficher l'alerte
    this.draggedTextIndex = null;
  }

  closeAlert() {
    this.showAlert = false;
  }
}
