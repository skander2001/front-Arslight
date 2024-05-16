import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-test-game2',
  templateUrl: './test-game2.component.html',
  styleUrl: './test-game2.component.css'
})
export class TestGame2Component {
  instructions: string = "The ancestors of dogs are wolves. Wolves are dog's distant relatives";
  options: string[] = ["assets/images/games/option3.png", "assets/images/games/option4.png"];
  selectedOption: string = '';
  feedbackMessage: string = '';
  progressCounter: number = 1;
  showResponseMessage: boolean = false;

  constructor(private router: Router) {}

  selectOption(option: string) {
    console.log("Option sélectionnée :", option);

    this.selectedOption = option;
    if (option === 'assets/images/games/option3.png') {
      // Jouer le son d'erreur
      let CorrectSound = new Audio();
      CorrectSound.src = "assets/sounds/correct.mp3"; // Chemin vers votre fichier audio d'erreur
      CorrectSound.load();
      CorrectSound.play();

      this.feedbackMessage = 'Good job!';
      this.progressCounter++;
      this.showResponseMessage = true;
      setTimeout(() => {
        this.router.navigate(['/test-game3']);
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
