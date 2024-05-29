const question = document.querySelector(".question");
const answer = document.querySelector(".answer");
const spnQnt = document.querySelector(".spnQnt");
const textFinish = document.querySelector(".finish span");
const content = document.querySelector(".content");
const contentFinish = document.querySelector(".finish");
const btnRestart = document.querySelector(".finish button");

import questions from "./questions.js";

let currentIndex = 0;
let corretAnswer = 0;

btnRestart.onclick = () => {
    content.style.display = `flex`;
    contentFinish.style.display = `none`;
}


function nextQuestion(e){
if(e.target.getAttribute("data-correct") === true){
    corretAnswer ++;

}
if(currentIndex < question.length -1){
    currentIndex ++;
    loadQuestion();
}
else{
    finish();
}
}
function finish(){
    textFinish.innerHTML = `Você acertou ${corretAnswer} de ${question.length}`
    content.style.display = `none`;
    contentFinish.style.display = `flex`;
}

function loadQuestion(){
    spnQnt.innerHTML = `${currentIndex +1}/${question.length}`;
    const item = question[currentIndex];
    answer.innerHTML = ``;
    question.innerHTML = `item.question`;

    item.answer.forEach((answer)=> {
        const div = document.createElement(`div`);
        div.innerHTML = `<button class="answer" data-correct = "${answer.correct}">
        ${answer.option}</button>`;
        answers.appendChild(div);
    });
    document.querySelectorAll(".answer").forEach((item)=> {
        item.addEventListener("click", nextQuestion);
});
}

loadQuestion();