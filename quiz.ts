import {questions} from './questions';
import {changeQuestion} from './quizDisplay';

let currentQuestionNumber = 0;
let currentQuestion = questions[currentQuestionNumber];

export function nextQuestion () {  
  currentQuestionNumber += 1;
  currentQuestion = questions[currentQuestionNumber];
}

export function prevQuestion () {
  currentQuestionNumber -= 1;
  currentQuestion = questions[currentQuestionNumber];
}

document
  .addEventListener(
    "click",
    function () {
      nextQuestion();
      changeQuestion(currentQuestion);
    }
  )

changeQuestion(currentQuestion);
