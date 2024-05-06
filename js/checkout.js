// Exercise 6
let error = 0;

// Get the input fields
let fName = document.getElementById("fName");
let fEmail = document.getElementById("fEmail");
let fAddress = document.getElementById("fAddress");
let fLastN = document.getElementById("fLastN");
let fPassword = document.getElementById("fPassword");
let fPhone = document.getElementById("fPhone");
let submitBtn = document.getElementById("submit-btn");

// // Get the error elements
// let errorName = document.getElementById("errorName");
// let errorEmail = document.getElementById("errorEmail");
// let errorAddress = document.getElementById("errorAddress");
// let errorLastN = document.getElementById("errorEmail");
// let errorPassword = document.getElementById("errorEmail");
// let errorPhone = document.getElementById("errorEmail");

const isValidLength = (value) => {
  return value.length >= 3;
};

const isLetters = (value) => {
  return /^[a-zA-Z]+$/.test(value);
};

const isNum = (value) => {
  return /^\d+$/.test(value);
};

const isEmail = (value) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
};

const isValidPassword = (value) => {
  return /[a-zA-Z]/.test(value) && /[0-9]/.test(value);
};

const fieldValidate = (field, callback) => {
  if (!isValidLength(field.value) || !callback(field.value)) {
    field.classList.add("is-invalid");
    error++;
  } else {
    field.classList.remove("is-invalid");
  }
};

function validate() {
  error = 0;

  fieldValidate(fName, isLetters);
  fieldValidate(fLastN, isLetters);
  fieldValidate(fAddress, isValidLength);
  fieldValidate(fPhone, isNum);
  fieldValidate(fEmail, isEmail);
  fieldValidate(fPassword, isValidPassword);

  if (error === 0) {
    submitBtn.setAttribute("data-bs-target", "#successModal");
  }
}

addEventListener("submit", function (event) {
  validate();
  event.preventDefault();
});

function navigate() {
  window.location.href = "/index.html";
}
