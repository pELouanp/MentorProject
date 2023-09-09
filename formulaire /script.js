const form = document.querySelector("form");

const first = document.querySelector(".first");
const last = document.querySelector(".last");
const mail = document.querySelector(".mail");
const password = document.querySelector(".password");

const error1 = document.querySelector(".error1");
const error2 = document.querySelector(".error2");
const error3 = document.querySelector(".error3");
const error4 = document.querySelector(".error4");

const imgError1 = document.querySelector(".imgError1");
const imgError2 = document.querySelector(".imgError2");
const imgError3 = document.querySelector(".imgError3");
const imgError4 = document.querySelector(".imgError4");

const validerFirst = () => {
  const formatFirst = /^.{3,}$/;
  if (!first.value.match(formatFirst)) {
    error1.classList.add("visible");
    imgError1.classList.add("visible");
  } else {
    error1.classList.remove("visible");
    imgError1.classList.remove("visible");
    first.setAttribute(
      "style",
      "border:2px; border-style:solid; border-color:#32CD32;"
    );
  }
};

const validerLast = () => {
  const formatLast = /^.{3,}$/;
  if (!last.value.match(formatLast)) {
    error2.classList.add("visible");
    imgError2.classList.add("visible");
  } else {
    error2.classList.remove("visible");
    imgError2.classList.remove("visible");
    last.setAttribute(
      "style",
      "border:2px; border-style:solid; border-color:#32CD32;"
    );
  }
};

const validerMail = () => {
  const formatMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!mail.value.match(formatMail)) {
    error3.classList.add("visible");
    imgError3.classList.add("visible");
  } else {
    error3.classList.remove("visible");
    imgError3.classList.remove("visible");
    mail.setAttribute(
      "style",
      "border:2px; border-style:solid; border-color:#32CD32;"
    );
  }
};

const validerPassword = () => {
  const formatPassword =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
  if (!password.value.match(formatPassword)) {
    error4.classList.add("visible");
    imgError4.classList.add("visible");
  } else {
    error4.classList.remove("visible");
    imgError4.classList.remove("visible");
    password.setAttribute(
      "style",
      "border:2px; border-style:solid; border-color:#32CD32;"
    );
  }
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validerFirst();
  validerLast();
  validerMail();
  validerPassword();
});
