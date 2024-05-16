import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ScoreServiceService} from "../../../services/score-service.service";

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrl: './question.component.css'
})
export class QuestionComponent implements OnInit  {
  question: string = '';
  question2: string = '';

  options: string[] = ['Never', 'Sometimes', 'Very Often'];
  selectedOption: string = '';
  currentQuestionId: number = 1;

  constructor(private router: Router, private route: ActivatedRoute, private scoreService: ScoreServiceService) { }

  ngOnInit(): void {
    // Récupérer l'ID de la question à partir de l'URL
    this.route.params.subscribe(params => {
      this.currentQuestionId = +params['id']; // Convertir l'ID en nombre
      // Accéder à la question correspondante dans le service ScoreServiceService
      this.question = this.scoreService.questions[this.currentQuestionId - 1]; // -1 car les indices de tableau commencent à 0
    });
  }
  answerQuestion(option: string) {

    this.selectedOption = option;
    let score = this.calculateScore(option);
    this.scoreService.updateScore(score);

    // Ajouter l'option sélectionnée à la liste des options sélectionnées
    this.scoreService.selectedOptions.push(option);

    // Vérifier si c'est la dernière question
    if (this.currentQuestionId === this.scoreService.questions.length) {
      // Évaluer le résultat en utilisant toutes les options sélectionnées
      let result = this.scoreService.evaluateResult(this.scoreService.selectedOptions);

      // Naviguer vers l'interface de résultat
      this.router.navigate(['/result'], { state: { result: result } });
    } else {
      // Naviguer vers la prochaine question
      this.router.navigate(['/question', this.currentQuestionId + 1]);
    }
  }

  calculateScore(option: string): number {
    switch (option) {
      case 'Never':
        return 0;
      case 'Sometimes':
        return 1;
      case 'Very Often':
        return 2;
      default:
        return 0;
    }
  }

  getQuestionText(questionId: number): string {
    // Logique pour obtenir le texte de la question en fonction de l'identifiant de la question
    return `Question ${questionId}`;
  }

  getButtonColor(option: string): string {
    switch (option) {
      case 'Never':
        return 'red';
      case 'Sometimes':
        return 'orange';
      case 'Very Often':
        return 'green';
      default:
        return '';
    }
  }


}
