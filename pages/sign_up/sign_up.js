async function signUp() {
  var username = document.getElementById("username");
  var email = document.getElementById("email");
  var password = document.getElementById("password");
  var form_data = {
    username: username.value,
    email: email.value,
    password: password.value,
  };
  try {
    var response = await fetch("http://localhost:5000/manual-sign_up", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form_data),
    });
    const data=await response.json();
    if (response.ok) {
      notification(data.message);
    } else {
      notification(data.message);
    }
  } catch (error) {
    console.error("Error:", error);
  }
}

const signUpButton = document.querySelector(".submitButton");
signUpButton.addEventListener("click", () => {
  signUp();
});
