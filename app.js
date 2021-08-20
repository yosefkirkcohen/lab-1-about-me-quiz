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

    const askName = prompt('What is your first name?');

    const takeQuiz = prompt(`Do you want to test your newfound knowledge ${askName}?`);
    if (!countsAsAYes(takeQuiz)) {
        return;
    }

    const quest1 = prompt('Does the Falcon Heavy have the highest payload of any launch vehicle ever?');
    if (!countsAsAYes(quest1)) {
        answerCounter++;
    }
    const quest2 = prompt('Was the maiden launch in 2018?');
    if (countsAsAYes(quest2)) {
        answerCounter++;
    }
    const quest3 = prompt('Was the Falcon Heavy designed to carry humans beyond low Earth orbit?');
    if (countsAsAYes(quest3)) {
        answerCounter++;
    }

    if (answerCounter === 3) {
        winContent(askName, answerCounter);
        winThings();
    
    } else if (answerCounter < 3 && answerCounter > 0) {
        notPerfectContent(askName, answerCounter);
        failCounter++;
    } else {
        failContent(askName, answerCounter);
        failCounter++;
    }

    resultsAndIncrement(passCounter, failCounter, quizCounter);    
});

resetButton.addEventListener('click', () => {
    quizCounter = 0;
    passCounter = 0;
    failCounter = 0;
    timesPassed.textContent = 'You have reset the quiz counter';
});

function winThings() {
    passCounter++;
}

function winContent(userName, number) {
    resultSpace.style.color = 'blue';
    resultSpace.textContent = `Wow, you are a careful reader, ${userName}! You got ${number} out of 3 questions correct.`;
}

function notPerfectContent(userName, number) {
    resultSpace.textContent = `Hmm, you are not perfect, ${userName}. You got ${number} out of 3 questions correct.`;
}

function failContent(userName, number) {
    resultSpace.textContent = `Wow, you are quite illiterate, ${userName}. You got ${number} out of 3 questions correct.`;
    resultSpace.style.color = 'red';
}

function resultsAndIncrement(pass, fail, total) {
    total++;
    timesPassed.textContent = `You have passed ${pass} and failed ${fail} out of ${total} attempts.`;
}
