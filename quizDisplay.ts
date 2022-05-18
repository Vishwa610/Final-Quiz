import {shuffleArray} from './utils';

function getAnswers (question : Question) {
  let answers = [...question.distractors,question.answer];
  shuffleArray(answers);
  return answers;
}

import {Question} from './questions';

export function changeQuestion (question: Question) {
    let container = document.querySelector('.question-container');
  container.innerHTML = `
  <div class="question-container">
    <div class="question">
      ${question.question}
    </div>
    <div class="answers">      
    </div>
  </div>
  `;
  // Now add the buttons...
  addAnswerButtons(
    container.querySelector('.answers'), 
    question
  );
}
/* Create a single button with text string for question */
function makeButton (a : string, question: Question) {
  let button = document.createElement('button');
  button.innerText = a;
  button.addEventListener(
    "click",
    function () {
      if (a==question.answer) {
        // handle right answer
        // (this is just a placeholder for now --
        // we should do something better with
        // right answers eventually)
        window.alert('Correct!');
      } else {
        // handle wrong answer
        // (this is just a placeholder for now
        // -- we should do something better with
        // wrong answers eventually)
        window.alert('Wrong!');
      }
    }
  );
  return button;
}

/* Add buttons for answers to container */
function addAnswerButtons (container : HTMLDivElement, question: Question) {
  let answers = getAnswers(question);
  answers.forEach(
    function (a) {
      container.appendChild(
        makeButton(a, question)
      );      
    }
  )
}
