import "./styles.css";
import submitForm from "./submitForm.js";

const email = document.querySelector("#email");
const submitBtn = document.querySelector(".button input");

email.addEventListener("input", () => {

  if (email.validity.typeMismatch) {
    email.setCustomValidity("I am expecting an email address!");
    email.reportValidity(); // unless submitted, need to add reportValidity()
  };

  (!email.value.endsWith("@google.com")) ? email.setCustomValidity("Please enter only @google.com email") : '' ;

});

submitBtn.addEventListener("click",(e) => submitForm(e));