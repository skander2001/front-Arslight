import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test-game3',
  templateUrl: './test-game3.component.html',
  styleUrl: './test-game3.component.css'
})
export class TestGame3Component {
  instructions: string = "Dogs have lots of relatives .All of them together are called the dog family.";
  options: string[] = ["assets/images/games/option7.jpg", "assets/images/games/option8.png", "assets/images/games/option9.png","assets/images/games/option10.png"];
  selectedOption: string = '';
  feedbackMessage: string = '';
  progressCounter: number = 2; // Initialiser le compteur de progression à 0
  showResponseMessage: boolean = false;
  dogNames: string[] = ["Fennex Fox", "Fox", "Jackal", "Arctic Fox"];


  constructor(private router: Router) {}selectOption(option: string) {
    this.selectedOption = option;
    if (option === 'assets/images/games/option7.jpg') {
      // Jouer le son correct
      let CorrectSound = new Audio();
      CorrectSound.src = "assets/sounds/correct.mp3"; // Chemin vers votre fichier audio d'erreur
      CorrectSound.load();
      CorrectSound.play();

      this.feedbackMessage = 'Good job!';
      this.progressCounter++;
      this.showResponseMessage = true;
      setTimeout(() => {
        this.router.navigate(['/test-game4']);
      }, 2000);
    } else {
      console.log("Option incorrecte sélectionnée");

      // Jouer le son d'erreur
      let errorSound = new Audio();
      errorSound.src = "assets/sounds/error.mp3"; // Chemin vers votre fichier audio d'erreur
      errorSound.load();
      errorSound.play();



      this.feedbackMessage = 'Oops! Try again.';
    }
  }
  closePage() {
    // Mettez ici le code pour fermer la page, par exemple :
    this.router.navigate(['/natural-world']); // Rediriger vers la page d'accueil
  }
}
