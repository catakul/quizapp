export default function toggleAnswer() {
  const cards = document.querySelectorAll("[data-js=card]");
  cards.forEach((card) => {
    const answerButton = card.querySelector("[data-js=show__answer]");
    const answer = card.querySelector("[data-js=answer]");
    answerButton.addEventListener("click", () => {
      answer.classList.toggle("hidden__answer");
    });
  });
}

export default function hideAnswer(){
const loginButton = document.querySelector('[data-js="show__answer"]');

let isAnswerShown = false;

loginButton.addEventListener("click", () => {
  isAnswerShown = !isAnswerShown;
    if (isAnswerShown) {
    
    loginButton.innerText = 'Hide Answer';
    console.log(isAnswerShown);
  } else {

    loginButton.innerText = 'Show answer';
  }
})
}