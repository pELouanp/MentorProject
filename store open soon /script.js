const btn = document.querySelector("button");
const form = document.querySelector("form");
const mail = document.querySelector(".mail");
const error = document.querySelector(".error");
const errorImg = document.querySelector(".errorImg");
const errorBorder = document.querySelector(".errorBorder");
const succes = document.querySelector(".succes");

const validerMail = () => {
  const format = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!mail.value.match(format)) {
    error.classList.add("visible");
    errorImg.classList.add("visible");
    errorBorder.classList.add("visible");
    succes.classList.remove("visible");
  } else {
    succes.classList.add("visible");
    error.classList.remove("visible");
    errorImg.classList.remove("visible");
    errorBorder.classList.remove("visible");
  }
};
form.addEventListener("submit", (e) => {
  e.preventDefault();
  validerMail();
});
