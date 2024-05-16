import {Component, OnInit} from '@angular/core';
import {ScoreServiceService} from "../../../services/score-service.service";

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrl: './result.component.css'
})
export class ResultComponent implements OnInit {
  score: number = 0;
  result: string = '';

  constructor(private scoreService: ScoreServiceService) { }

  ngOnInit(): void {
    this.score = this.scoreService.score;
    // Appeler la méthode evaluateResult() pour obtenir le type de dyslexie
    this.result = this.scoreService.evaluateResult(this.scoreService.selectedOptions);
  }
}
