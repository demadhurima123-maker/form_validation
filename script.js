let form = document.getElementById("myform");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let usernameVal = document.getElementById("username").value.trim();
  let emailVal = document.getElementById("useremail").value.trim();
  let passVal = document.getElementById("userpass").value.trim();

  let successMsg = document.getElementById("success");
  successMsg.textContent = "";

  let usernameError = document.getElementById("usernameError");
  usernameError.textContent = "";
  let emailError = document.getElementById("emailError");
  emailError.textContent = "";
  let passwordError = document.getElementById("passwordError");
  passwordError.textContent = "";
  let isValid = true;

  //Regex Patterns
  let nameRegex = /^[A-Za-z ]{5,15}$/;
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  //Username
  if (!nameRegex.test(usernameVal)) {
    usernameError.textContent = "**Invalid user name";
    isValid = false;
  }

  //Email
  if (!emailRegex.test(emailVal)) {
    emailError.textContent = "**Invalid email format";
    isValid = false;
  }

  //Password
  if (!passwordRegex.test(passVal)) {
    passwordError.textContent =
      "**Password should contain atleast one uppercase, one lowercase, one special character and one number";
    isValid = false;
  }

  //Everything proper
  if (isValid) {
    alert("Form submitted successfully");
    successMsg.textContent = "Form submitted 🚀";
  }
});
