document.getElementById("login-form").addEventListener("submit", function(e) {
  e.preventDefault();

  const user = document.getElementById("username").value.trim();
  const pass = document.getElementById("password").value.trim();
  const msg = document.getElementById("login-msg");

  // Dummy login check
  if (user === "user" && pass === "1234") {
    localStorage.setItem("loggedInUser", user);
    msg.textContent = "✅ Login successful!";
    msg.classList.remove("hidden");
    msg.style.color = "green";

    // Redirect after short delay (optional)
    setTimeout(() => {
      window.location.href = "index.html";
    }, 1000);
  } else {
    msg.textContent = "❌ Invalid username or password.";
    msg.classList.remove("hidden");
    msg.style.color = "red";
  }
});
