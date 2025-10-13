import { Component } from '@angular/core';

@Component({
  selector: 'app-form-quiz',
  templateUrl: './form-quiz.component.html',
  styleUrls: ['./form-quiz.component.css']
})
export class FormQuizComponent {

  quizContent = [
    {
      id: 1,
      question: 'Quel est le principal avantage des composants dans Angular ?',
      answers: [
        {
          answer: 'Accélérer le temps de chargement de la page',
          correct: false
        },
        {
          answer: 'Encapsulation et réutilisabilité du code',
          correct: true
        },
        {
          answer: 'Facilité de déploiement',
          correct: false
        },
        {
          answer: 'Optimisation du SEO',
          correct: false
        }
      ]
    },
    {
      id: 2,
      question: 'Quel est le principal avantage des composants dans Angular ?',
      answers: [
        {
          answer: 'Accélérer le temps de chargement de la page',
          correct: false
        },
        {
          answer: 'Encapsulation et réutilisabilité du code',
          correct: true
        },
        {
          answer: 'Facilité de déploiement',
          correct: false
        },
        {
          answer: 'Optimisation du SEO',
          correct: false
        }
      ]
    },
    {
      id: 3,
      question: 'Quel est le principal avantage des composants dans Angular ?',
      answers: [
        {
          answer: 'Accélérer le temps de chargement de la page',
          correct: false
        },
        {
          answer: 'Encapsulation et réutilisabilité du code',
          correct: true
        },
        {
          answer: 'Facilité de déploiement',
          correct: false
        },
        {
          answer: 'Optimisation du SEO',
          correct: false
        }
      ]
    },
    {
      id: 4,
      question: 'Quel est le principal avantage des composants dans Angular ?',
      answers: [
        {
          answer: 'Accélérer le temps de chargement de la page',
          correct: false
        },
        {
          answer: 'Encapsulation et réutilisabilité du code',
          correct: true
        },
        {
          answer: 'Facilité de déploiement',
          correct: false
        },
        {
          answer: 'Optimisation du SEO',
          correct: false
        }
      ]
    },
    {
      id: 5,
      question: 'Quel est le principal avantage des composants dans Angular ?',
      answers: [
        {
          answer: 'Accélérer le temps de chargement de la page',
          correct: false
        },
        {
          answer: 'Encapsulation et réutilisabilité du code',
          correct: true
        },
        {
          answer: 'Facilité de déploiement',
          correct: false
        },
        {
          answer: 'Optimisation du SEO',
          correct: false
        }
      ]
    },
    {
      id: 6,
      question: 'Quel est le principal avantage des composants dans Angular ?',
      answers: [
        {
          answer: 'Accélérer le temps de chargement de la page',
          correct: false
        },
        {
          answer: 'Encapsulation et réutilisabilité du code',
          correct: true
        },
        {
          answer: 'Facilité de déploiement',
          correct: false
        },
        {
          answer: 'Optimisation du SEO',
          correct: false
        }
      ]
    },
    {
      id: 7,
      question: 'Quel est le principal avantage des composants dans Angular ?',
      answers: [
        {
          answer: 'Accélérer le temps de chargement de la page',
          correct: false
        },
        {
          answer: 'Encapsulation et réutilisabilité du code',
          correct: true
        },
        {
          answer: 'Facilité de déploiement',
          correct: false
        },
        {
          answer: 'Optimisation du SEO',
          correct: false
        }
      ]
    },
    {
      id: 8,
      question: 'Quel est le principal avantage des composants dans Angular ?',
      answers: [
        {
          answer: 'Accélérer le temps de chargement de la page',
          correct: false
        },
        {
          answer: 'Encapsulation et réutilisabilité du code',
          correct: true
        },
        {
          answer: 'Facilité de déploiement',
          correct: false
        },
        {
          answer: 'Optimisation du SEO',
          correct: false
        }
      ]
    },
    {
      id: 9,
      question: 'Quel est le principal avantage des composants dans Angular ?',
      answers: [
        {
          answer: 'Accélérer le temps de chargement de la page',
          correct: false
        },
        {
          answer: 'Encapsulation et réutilisabilité du code',
          correct: true
        },
        {
          answer: 'Facilité de déploiement',
          correct: false
        },
        {
          answer: 'Optimisation du SEO',
          correct: false
        }
      ]
    },
    {
      id: 10,
      question: 'Quel est le principal avantage des composants dans Angular ?',
      answers: [
        {
          answer: 'Accélérer le temps de chargement de la page',
          correct: false
        },
        {
          answer: 'Encapsulation et réutilisabilité du code',
          correct: true
        },
        {
          answer: 'Facilité de déploiement',
          correct: false
        },
        {
          answer: 'Optimisation du SEO',
          correct: false
        }
      ]
    }
  ];

  getAnswerLetter(j: number) {
    return String.fromCharCode(65 + j);
  }



}
