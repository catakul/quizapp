export function toggleAnswer() {
  const cards = document.querySelectorAll('[data-js=card]');
  cards.forEach(card => {
    const answerButton = card.querySelector('[data-js=show__answer]');
    const answer = card.querySelector('[data-js=answer]');
    answerButton.addEventListener('click', () => {
      answer.classList.toggle('hidden__answer');
      if (answer.classList.contains('hidden__answer')) {
        answerButton.innerText = 'Show answer';
      } else {
        answerButton.innerText = 'Hide Answer';
      }
    });
  });
}

/* 
export function hideAnswer(){
const ShowAnswerButton = document.querySelector('[data-js="show__answer"]');

let isAnswerShown = false;

ShowAnswerButton.addEventListener("click", () => {
  isAnswerShown = !isAnswerShown;
    if (isAnswerShown) {
    
    ShowAnswerButton.innerText = 'Hide Answer';
    console.log(isAnswerShown);
  } else {

    ShowAnswerButton.innerText = 'Show answer';
  }
})
}
 */
