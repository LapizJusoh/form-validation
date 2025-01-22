export default function submitForm(e) {

  e.preventDefault();
  const nameValue = document.querySelector("#fname").value;
  const ageValue = document.querySelector("#age").value;
  const careerValue = document.querySelector("#career").value;

  let userDataField = [nameValue, ageValue, careerValue];

  for (const userData of userDataField) {
    const outputField = document.querySelector("#output");
    const p = document.createElement("p");
    p.innerText = userData;

    outputField.appendChild(p);
  }
}