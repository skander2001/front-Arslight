import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-test-game1',
  templateUrl: './test-game1.component.html',
  styleUrl: './test-game1.component.css'
})
export class TestGame1Component {
  instructions: string = "Hi! Steam and his friend Michal are here! We will help you learn more about dogs.";
  imageUrl: string = "assets/images/games/game1.png";
  options: string[] = ["assets/images/games/option1.png", "assets/images/games/option2.png"];
  selectedOption: string = '';
  feedbackMessage: string = '';
  progressCounter: number = 0; // Initialiser le compteur de progression à 0
  showResponseMessage: boolean = false;


  constructor(private router: Router) {}


  selectOption(option: string) {
    console.log('Option selected:', option);
    this.selectedOption = option;
    this.feedbackMessage = ''; // Réinitialiser le message de rétroaction

    // Vérifier si une option a été sélectionnée
    if (this.selectedOption) {

      this.showResponseMessage = true;
      setTimeout(() => {
        console.log('Redirecting to next interface...');
        this.router.navigate(['/test-game2']);
      }, 2000);
    } else {
      console.log('Incorrect answer selected.'); // Vérifiez si l'option incorrecte est sélectionnée
    }
  }






  closePage() {
    // Mettez ici le code pour fermer la page, par exemple :
    this.router.navigate(['/home-enfant']); // Rediriger vers la page d'accueil
  }

  /*
     selectOption(option: string) {
      this.selectedOption = option;
      if (option === 'Correct Answer') {
        this.feedbackMessage = 'Good job!';
        this.progressCounter++; // Incrémenter le compteur de progression

        this.router.navigate(['/next-interface']);
      } else {
        // Vibrate the page
        if (window.navigator.vibrate) {
          window.navigator.vibrate(200); // Vibrate for 200ms
        } else {
          console.log("Vibration is not supported on this browser.");
        }
        // Show error message
        this.feedbackMessage = 'Oops! Try again.';


      }
    }  */


}


