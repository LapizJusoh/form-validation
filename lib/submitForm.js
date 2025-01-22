"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = submitForm;
function submitForm(e) {
  e.preventDefault();
  const nameValue = document.querySelector("#fname").value;
  const userValue = document.querySelector("#username").value;
  const emailValue = document.querySelector("#email").value;
  const phoneValue = document.querySelector("#phone-number").value;
  const genderValue = document.querySelector("input[name=\"gender\"]:checked").value;
  alert("Real Name: ".concat(nameValue, "\n    \nUsername: ").concat(userValue, "\n    \nEmail: ").concat(emailValue, "\n    \nPhone Number: ").concat(phoneValue, "\n    \nGender: ").concat(genderValue));
}