import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScoreServiceService {
  score: number = 0;
  questions: string[] = [
    "During reading... You hesitate a lot and lack fluency while reading.",
    "During reading... You may read and reread a sentence or even a paragraph many times without understanding it.",


    "During reading... You have difficulty understanding a text and paraphrasing it.",
    "When writing... You often write as you hear, disregarding spelling.",
    "When writing... You have difficulty properly separating words from each other.",


    "When writing... You tend to reverse certain letters: b/p q/d.",
    "At school... You struggle to learn new skills, such as reading an online course, and have difficulty remembering them. ",
    "At school... You may not understand instructions when reading them yourself, but understand them perfectly when someone reads the same text aloud.",
    "You have difficulty in tasks where it's important to understand the texts you have in front of you."



    // Ajoutez d'autres questions ici
  ];
  selectedOptions: string[] = []; // Stocke les options sélectionnées pour chaque question


  constructor() { }

  updateScore(value: number) {
    this.score += value;
  }

  resetScore() {
    this.score = 0;
  }
  evaluateResult(selectedOptions: string[]): string {
    let jamaisCount = 0;
    let parfoisCount = 0;
    let tresSouventCount = 0;

    for (let i = 0; i < selectedOptions.length; i++) {
      switch (selectedOptions[i]) {
        case 'Never':
          jamaisCount++;
          break;
        case 'Sometimes':
          parfoisCount++;
          break;
        case 'Very Often':
          tresSouventCount++;
          break;
      }
    }

    if (jamaisCount > parfoisCount && jamaisCount > tresSouventCount) {
      return "Based on your responses, it appears that your experience of dyslexia is not severe. This means that while you may encounter challenges with reading, writing, and comprehension, these difficulties are likely manageable with the right support and strategies in place. It's important to recognize that dyslexia exists on a spectrum, and individuals with mild dyslexia often have strengths and abilities that can be harnessed to overcome challenges.Furthermore, dyslexia is not a reflection of intelligence or capability. Many successful individuals have dyslexia and have achieved great things by leveraging their unique strengths and talents. By embracing your strengths and seeking support when needed, you can navigate the challenges of dyslexia and thrive in various aspects of life, including education, career, and personal pursuits. Remember that you are not alone, and there are resources and communities available to support you on your journey with dyslexia."
    } else if (parfoisCount > jamaisCount && parfoisCount > tresSouventCount) {
      return "Based on your responses, it seems that the  severity appears to be mild. However, it's important to note that having dyslexia does not mean you are not intelligent or capable. Many individuals withdyslexia have unique strengths and talents in areas such as problem-solving, creativity, and thinking outside the box.Since your dyslexia appears to be mild, there are various exercises and strategies that can help improve your reading and writing skills.With the right support and strategies in place, you can overcome the challenges associated with dyslexia and thrive academically and personally. Remember that everyone's journey with dyslexia is unique, and there is no one-size-fits-all approach to managing it.";
    } else {
      return "Based on your responses, it seems that your experience of dyslexia may be more severe. Severe dyslexia can present significant challenges in reading, writing, and comprehension, impacting various aspects of daily life, including academic performance, professional endeavors, and self-confidence.Individuals with severe dyslexia may struggle to decode words, recognize familiar patterns, and comprehend written text, leading to frustration and discouragement. These challenges can extend beyond academic settings and affect interpersonal relationships, self-esteem, and overall quality of life.However, it's important to remember that dyslexia is not indicative of intelligence or potential. Many individuals with severe dyslexia possess unique strengths, such as creativity, problem-solving abilities, and resilience, that can be nurtured and celebrated.Seeking appropriate support and interventions is crucial for managing severe dyslexia."
    }
  }
}
