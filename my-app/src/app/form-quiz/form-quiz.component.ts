import { NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormQuizService } from '../services/form-quiz.service';

@Component({
  selector: 'app-form-quiz',
  templateUrl: './form-quiz.component.html',
  styleUrls: ['./form-quiz.component.css']
})
export class FormQuizComponent {

  quizContent = this.formQuizService.quizContent;
  isQuizFinished = this.formQuizService.isQuizFinished;
  score = this.formQuizService.score;

  constructor(private formQuizService: FormQuizService) {}

  getAnswerLetter(j: number) {
    return String.fromCharCode(65 + j);
  }

  checkAnswers() {
    this.formQuizService.checkAnswers();
    this.score = this.formQuizService.score;
    this.isQuizFinished = this.formQuizService.isQuizFinished;
  }

  addAnswer(answer: string, questionId: number) {
    this.formQuizService.addAnswer(answer, questionId);
  }

  isAnswerSelected(answer: string, id: number) {
    const isAnswered = this.formQuizService.playerAnswers.find((a) => a.questionId === id);
    if (!isAnswered) return false;
    return isAnswered.answer === answer;
  }


}
