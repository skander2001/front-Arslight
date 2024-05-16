import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-test-game5',
  templateUrl: './test-game5.component.html',
  styleUrl: './test-game5.component.css'
})
export class TestGame5Component {
  instructions: string = "Which dog is known for its long, flowing coat? ";
  options: string[] = [ "assets/images/games/option12.jpg","assets/images/games/option11.jpg"];
  selectedOption: string = '';
  feedbackMessage: string = '';
  progressCounter: number = 1; // Initialiser le compteur de progression à 0
  showResponseMessage: boolean = false;
  dogNames: string[] = ["Afghan Hound", "Beagle"];

  constructor(private router: Router) {}
  selectOption(option: string) {
    this.selectedOption = option;
    if (option === 'assets/images/games/option11.jpg') {
      this.feedbackMessage = 'Good job!';
      this.progressCounter++;
      this.showResponseMessage = true;
      setTimeout(() => {
        this.router.navigate(['/test-game6']);
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
