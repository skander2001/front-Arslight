import { Component } from '@angular/core';
import { faker } from '@faker-js/faker';

@Component({
  selector: 'app-typing-game',
  templateUrl: './typing-game.component.html',
  styleUrl: './typing-game.component.css'
})
export class TypingGameComponent {
  lorem ="Bonne Chance Arslight"
  userText = ''
  winner = false

  onUserInput(value:string){
    this.userText = value
    if (this.userText === this.lorem) {
      this.winner = true
    }
  }

  compare(randomLetter:string, enteredLetter:string){
    if (!enteredLetter) {
      return 'pending'
    }

    return randomLetter === enteredLetter ? 'correct' : 'incorrect'
  }

}
