async function authenticateUser() {
    try {
      var response = await fetch("https://ecommerce-server-wdin.onrender.com/user-details", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        }
      });
      const data = await response.json();
      if (response.ok) {
        console.log(data.message);
        sessionStorage.setItem('user',JSON.stringify(data.user));
      } else {
        console.log(data.message);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }