"use strict";

require("core-js/modules/es.string.ends-with.js");
require("./styles.css");
var _submitForm = _interopRequireDefault(require("./submitForm.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const email = document.querySelector("#email");
const submitBtn = document.querySelector(".button input");
email.addEventListener("input", () => {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("I am expecting an email address!");
    email.reportValidity(); // unless submitted, need to add reportValidity()
  }
  ;
  !email.value.endsWith("@google.com") ? email.setCustomValidity("Please enter only @google.com email") : '';
});
submitBtn.addEventListener("click", e => (0, _submitForm.default)(e));