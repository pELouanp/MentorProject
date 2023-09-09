const question1 = document.querySelector(".question1");
const question2 = document.querySelector(".question2");
const question3 = document.querySelector(".question3");
const question4 = document.querySelector(".question4");
const question5 = document.querySelector(".question5");

const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");
const btn4 = document.querySelector(".btn4");
const btn5 = document.querySelector(".btn5");

const reponse1 = document.querySelector(".reponse1");
const reponse2 = document.querySelector(".reponse2");
const reponse3 = document.querySelector(".reponse3");
const reponse4 = document.querySelector(".reponse4");
const reponse5 = document.querySelector(".reponse5");

question2.addEventListener("click", () => {
  reponse2.classList.toggle("visible");
  question2.classList.toggle("bold");
  question1.classList.remove("bold");
  question3.classList.remove("bold");
  question4.classList.remove("bold");
  question5.classList.remove("bold");
  btn2.classList.toggle("visible");
  reponse1.classList.remove("visible");
  reponse3.classList.remove("visible");
  reponse4.classList.remove("visible");
  reponse5.classList.remove("visible");
  btn1.classList.remove("visible");
  btn3.classList.remove("visible");
  btn4.classList.remove("visible");
  btn5.classList.remove("visible");
});

question1.addEventListener("click", () => {
  reponse1.classList.toggle("visible");
  question1.classList.toggle("bold");
  question2.classList.remove("bold");
  question3.classList.remove("bold");
  question4.classList.remove("bold");
  question5.classList.remove("bold");
  reponse2.classList.remove("visible");
  reponse3.classList.remove("visible");
  reponse4.classList.remove("visible");
  reponse5.classList.remove("visible");
  btn1.classList.toggle("visible");
  btn2.classList.remove("visible");
  btn3.classList.remove("visible");
  btn4.classList.remove("visible");
  btn5.classList.remove("visible");
});

question3.addEventListener("click", () => {
  reponse3.classList.toggle("visible");
  question1.classList.remove("bold");
  question2.classList.remove("bold");
  question4.classList.remove("bold");
  question5.classList.remove("bold");
  question3.classList.toggle("bold");
  reponse1.classList.remove("visible");
  reponse2.classList.remove("visible");
  reponse4.classList.remove("visible");
  reponse5.classList.remove("visible");
  btn3.classList.toggle("visible");
  btn1.classList.remove("visible");
  btn2.classList.remove("visible");
  btn4.classList.remove("visible");
  btn5.classList.remove("visible");
});

question4.addEventListener("click", () => {
  reponse4.classList.toggle("visible");
  question4.classList.toggle("bold");
  question1.classList.remove("bold");
  question3.classList.remove("bold");
  question2.classList.remove("bold");
  question5.classList.remove("bold");
  reponse1.classList.remove("visible");
  reponse2.classList.remove("visible");
  reponse3.classList.remove("visible");
  reponse5.classList.remove("visible");
  btn4.classList.toggle("visible");
  btn1.classList.remove("visible");
  btn3.classList.remove("visible");
  btn2.classList.remove("visible");
  btn5.classList.remove("visible");
});

question5.addEventListener("click", () => {
  reponse5.classList.toggle("visible");
  question5.classList.toggle("bold");
  question1.classList.remove("bold");
  question3.classList.remove("bold");
  question4.classList.remove("bold");
  question2.classList.remove("bold");
  reponse1.classList.remove("visible");
  reponse2.classList.remove("visible");
  reponse3.classList.remove("visible");
  reponse4.classList.remove("visible");
  btn5.classList.toggle("visible");
  btn1.classList.remove("visible");
  btn3.classList.remove("visible");
  btn4.classList.remove("visible");
  btn2.classList.remove("visible");
});
