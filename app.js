// import functions and grab DOM elements

// initialize state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

import { countsAsAYes } from './utils.js';

const quizButton = document.querySelector('#quiz-button');
const resultSpace = document.querySelector('#result-space');
const timesPassed = document.querySelector('#times-passed');
const resetButton = document.querySelector('#reset-button');

let quizCounter = 0;
let passCounter = 0;
let failCounter = 0;


quizButton.addEventListener('click', () => {
    let answerCounter = 0;

    const takeQuiz = prompt('Do you want to test your newfound knowledge?')
    if (!countsAsAYes(takeQuiz)) {
        return;
    }

    const quest1 = prompt('Does the Falcon Heavy have the highest payload of any launch vehicle ever?')
    if (!countsAsAYes(quest1)) {
        answerCounter++;
    }
    const quest2 = prompt('Was the maiden launch in 2018?')
    if (countsAsAYes(quest2)) {
        answerCounter++;
    }
    const quest3 = prompt('Was the Falcon Heavy designed to carry humans beyond low Earth orbit?')
    if(countsAsAYes(quest3)) {
        answerCounter++;
    }

    if (answerCounter === 3) {
        resultSpace.textContent = `Wow, you are a careful reader! You got ${answerCounter} out of 3 questions correct.`
        resultSpace.style.color = "blue";
        passCounter++;
    } else if (answerCounter < 3 && answerCounter > 0) {
        resultSpace.textContent = `Hmm, you are not perfect. You got ${answerCounter} out of 3 questions correct.`
        failCounter++
    } else {
        resultSpace.textContent = `Wow, you are quite illiterate my friend. You got ${answerCounter} out of 3 questions correct.`
        resultSpace.style.color = "red";
        failCounter++
    }
    quizCounter++
    timesPassed.textContent = `You have passed ${passCounter} and failed ${failCounter} out of ${quizCounter} attempts.`
    
})

resetButton.addEventListener('click', () => {
    quizCounter = 0;
    passCounter = 0;
    failCounter = 0;
    timesPassed.textContent = "You have reset the quiz counter";
})