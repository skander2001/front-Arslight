import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test-game6',
  templateUrl: './test-game6.component.html',
  styleUrl: './test-game6.component.css'
})
export class TestGame6Component {
  instructions: string = "Which dog is known for its wrinkled face?";
  options: string[] = [ "assets/images/games/option13.jpg","assets/images/games/option14.jpg"];
  selectedOption: string = '';
  feedbackMessage: string = '';
  progressCounter: number = 1;
  showResponseMessage: boolean = false;
  dogNames: string[] = ["Bulldog", "Poodle"];
  showCongratulations: boolean = false; // Nouvelle variable

  constructor(private router: Router) {}

  selectOption(option: string) {
    this.selectedOption = option;
    if (option === 'assets/images/games/option13.jpg') {
      this.feedbackMessage = 'Good job!';
      this.progressCounter++;
      this.showResponseMessage = true;
      setTimeout(() => {
        this.showCongratulations = true; // Afficher le pop-up de félicitations
        setTimeout(() => {
          this.router.navigate(['/natural-world']); // Rediriger après un délai
        }, 3000); // 3 secondes de délai avant la redirection
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
    this.router.navigate(['/natural-world']);
  }
}
