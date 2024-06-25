authenticateUser();

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
    var response = await fetch("https://ecommerce-server-wdin.onrender.com/manual-sign_up", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form_data),
    });
    const data=await response.json();
    if (data.ok) {
      notification(data.message,data.ok);
    } else {
      notification(data.message,data.ok);
    }
  } catch (error) {
    console.error("Error:", error);
  }
}

const signUpButton = document.querySelector(".submitButton");
signUpButton.addEventListener("click", () => {
  signUp();
});
