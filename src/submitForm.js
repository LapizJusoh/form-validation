export default function submitForm(e) {

  e.preventDefault();

  const nameValue = document.querySelector("#fname").value;
  const userValue = document.querySelector("#username").value;
  const emailValue = document.querySelector("#email").value;
  const phoneValue = document.querySelector("#phone-number").value;
  const genderValue = document.querySelector(`input[name="gender"]:checked`).value;

  alert(`Real Name: ${nameValue}
    \nUsername: ${userValue}
    \nEmail: ${emailValue}
    \nPhone Number: ${phoneValue}
    \nGender: ${genderValue}`
  );
}