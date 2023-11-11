import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  currentQuestionIndex = 0;
  questions: any[] = [
    {
      question: 'What is the primary goal of React.js?',
      options: ['To make web development more complicated', 'To build user interfaces with ease and facilitate reasoning about interface and state', 'To integrate corollary technologies seamlessly', 'To replace alternative frameworks'],
      correctAnswer: 'To build user interfaces with ease and facilitate reasoning about interface and state'
    },
    {
      question: 'Which of the following concepts are fundamental to understanding React?',
      options: ['Angular, Vue, Ember, and React', 'HTML, CSS, and JavaScript', 'Components, JSX, State, and Props', 'Redux, GraphQL, and AJAX'],
      correctAnswer: 'Components, JSX, State, and Props'
    },
    {
      question: 'What contributed to Reacts popularity during its introduction in the frontend web development landscape?',
      options: ['It was more complex than other alternatives', 'Seamless integration into existing projects', 'Angular 2.x s compatibility improvements', 'Facebook disinterest in React'],
      correctAnswer: 'Seamless integration into existing projects'
    },
    {
      question: 'What are the fundamental building blocks of web development that are considered prerequisites for diving into React?',
      options: ['React and Redux', 'HTML and CSS', 'JavaScript and jQuery', 'Node.js and Express'],
      correctAnswer: 'HTML and CSS'
    },
    // Add more questions similarly
  ];
  selectedOption: string | null = null;
  score = 0;
  quizCompleted = false;

  ngOnInit(): void {
    // Initialize the component
  }

  selectOption(option: string): void {
    this.selectedOption = option;
  }

  nextQuestion(): void {
    // Check if the selected option is correct
    if (this.selectedOption === this.questions[this.currentQuestionIndex].correctAnswer) {
      this.score++;
    }

    // Move to the next question or end the quiz
    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
      this.selectedOption = null; // Reset selected option for the next question
    } else {
      this.quizCompleted = true;
    }
  }

  submitQuiz(): void {
    // Display the final score
    alert(`Your score is: ${this.score}`);
  }
}
