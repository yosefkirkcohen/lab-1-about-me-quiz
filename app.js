// import functions and grab DOM elements

// initialize state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
const quizButton = document.querySelector('#quiz-button');
const resultSpace = document.querySelector('#result-space');

quizButton.addEventListener('click', () => {
  let answerCounter = 0;

  const takeQuiz = prompt('Do you want to test your newfound knowledge?')
  if (takeQuiz[0] !== 'y') {
  return;
  }

  const quest1 = prompt('Does the Falcon Heavy have the highest payload of any launch vehicle ever?')
  if(quest1[0] === 'n') {
    answerCounter++;
  }
  const quest2 = prompt('Was the maiden launch in 2018?')
  if(quest2[0] === 'y') {
    answerCounter++;
  }
  const quest3 = prompt('Was the Falcon Heavy designed to carry humans beyond low Earth orbit?')

  if(quest3[0] === 'y') {
  answerCounter++;
  }
  resultSpace.textContent = `Wow, you got ${answerCounter} out of 3 questions correct.`

})