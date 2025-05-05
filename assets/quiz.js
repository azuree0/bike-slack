const finish_btn = document.getElementById("finish-button");

const quiz_form = document.querySelector("#quizForm");
const answers = {};

let currentQuestionIndex = 0;

const prev_btn = document.getElementById("prev-button");
const next_btn = document.getElementById("next-button");

next_btn.addEventListener("click", function () {
	currentQuestionIndex++;
	displayQuestion(currentQuestionIndex);

  updateButtonStates(currentQuestionIndex);
});

prev_btn.addEventListener("click", function () {
  currentQuestionIndex--;
	displayQuestion(currentQuestionIndex);
	
  updateButtonStates(currentQuestionIndex);
});

function updateButtonStates(index) {
  prev_btn.disabled = (index===0);
  next_btn.classList.toggle("hidden", index === questions.length - 1); 
  finish_btn.classList.toggle("hidden", index !== questions.length - 1);
}

function displayQuestion(index) {
  let current_question = questions[index];
  let selected_answer = answers[current_question.name] || '';

  let question_html = `
    <h2>${current_question.text}</h2>
    <div class="label-container">
      ${current_question.options.map(option => `
        <input ${option.value === selected_answer ? "checked" : ""} type="radio" id="${option.value}" name="${current_question.name}" value="${option.value}">
        <label for="${option.value}">
          <div class="img-wrap">
            <img src="${option.img}">
          </div>
          <span>${option.label}</span>
        </label>
      `).join('')}
    </div>
  `;

  quiz_form.innerHTML = question_html;
}

updateButtonStates(currentQuestionIndex);
displayQuestion(currentQuestionIndex);

quiz_form.addEventListener("change", updateAnswers);
function updateAnswers(event) {
  //code to store answers
  let input = event.target;
  answers[input.name] = input.value;
}

finish_btn.addEventListener("click", function () {
  if (answers.product_type && answers.bike_type && answers.color) {
    alert("Here are your answers: " + JSON.stringify(answers));
  } else {
    alert("Please answer all the questions!");
  }
});