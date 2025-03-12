const loginForm = document.querySelector(".login-form");
loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const { email, password } = form.elements;
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  if (email === "" || password === "") {
    return alert("All form fields must be filled in");
    const formUser = {
      email: emailValue,
      password: passwordValue,
    };
    console.log(formUser);
    form.reset();
  }
});
