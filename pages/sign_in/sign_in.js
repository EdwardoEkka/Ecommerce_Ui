 async function signIn() {
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var form_data = {
      email: email.value,
      password: password.value,
    };
    try {
        var response = await fetch("http://localhost:5000/manual-sign_in", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(form_data),
        });
        const data=await response.json();
      if (response.ok) {
        notification(data.message);
        localStorage.setItem('token',data.token);
        console.log(data.token);
      } else {
        notification(data.message);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }
  
  const signInButton = document.querySelector(".submitButtonIn");
  signInButton.addEventListener("click", () => {
    signIn();
  });
  