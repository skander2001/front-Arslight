import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-test-game4',
  templateUrl: './test-game4.component.html',
  styleUrl: './test-game4.component.css'
})
export class TestGame4Component {
  instructions: string = "What type of dog is often used as a rescue dog in snowy mountains?";
  options: string[] = ["assets/images/games/option5.png", "assets/images/games/option6.jpg"];
  selectedOption: string = '';
  feedbackMessage: string = '';
  progressCounter: number = 1; // Initialiser le compteur de progression à 0
  showResponseMessage: boolean = false;
  dogNames: string[] = ["Saint Bernard", "Chihuahua"];


  constructor(private router: Router) {}
  selectOption(option: string) {
    this.selectedOption = option;
    if (option === 'assets/images/games/option5.png') {
      this.feedbackMessage = 'Good job!';
      this.progressCounter++;
      this.showResponseMessage = true;
      setTimeout(() => {
        this.router.navigate(['/test-game5']);
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
