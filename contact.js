const form = document.getElementById("form");
const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const age = document.getElementById("age");
const address = document.getElementById("address");
const phonenumber = document.getElementById("phonenumber");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  const firstnameValue = firstname.value.trim();
  const lastnameValue = lastname.value.trim();
  const ageValue = age.value.trim();
  const addressValue = address.value.trim();
  const phonenumberValue = phonenumber.value.trim();

  if (firstnameValue === "") {
    setErrorFor(firstname, "First name cannot be blank!");
  } else {
    setSuccessFor(firstname);
  }

  if (lastnameValue === "") {
    setErrorFor(lastname, "Last name cannot be blank!");
  } else {
    setSuccessFor(lastname);
  }

  if (ageValue === "") {
    setErrorFor(age, "Age cannot be blank!");
  } else {
    setSuccessFor(age);
  }

  if (addressValue === "") {
    setErrorFor(address, "Address cannot be blank!");
  } else {
    setSuccessFor(address);
  }

  if (phonenumberValue === "") {
    setErrorFor(phonenumber, "Phone number cannot be blank!");
  } else if (isPhoneNumber(phonenumberValue)) {
    setErrorFor(phonenumber, "Phone number must be 8 digits");
  } else {
    setSuccessFor(phonenumber);
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  small.innerText = message;

  formControl.className = "form-control error";
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

function isPhoneNumber() {
  if (phonenumberValue.toString().length === 8) {
    setSuccessFor(phonenumber);
  } else {
    setErrorFor(phonenumber, "Phone number must be 8 digits!");
  }
}
