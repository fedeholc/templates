document.getElementById("loginForm").addEventListener("submit", sendForm);

async function sendForm(event) {
  event.preventDefault();

  const name = document.getElementById("inputName").value;
  const password = document.getElementById("inputPassword").value;

  try {
    const response = await fetch("http://localhost:3002/loginjs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, password }),
    });

    const data = await response.json();

    const messageDiv = document.getElementById("message");

    if (response.ok) {
      messageDiv.textContent = "Login successful!";
      messageDiv.classList.add("success");
      messageDiv.classList.remove("error");
    } else {
      messageDiv.textContent =
        "Login failed: " + (data.message || "Invalid credentials");
      messageDiv.classList.add("error");
      messageDiv.classList.remove("success");
    }
  } catch (error) {
    const messageDiv = document.getElementById("message");
    messageDiv.textContent = "An error occurred: " + error.message;
    messageDiv.classList.add("error");
    messageDiv.classList.remove("success");
  }
}
