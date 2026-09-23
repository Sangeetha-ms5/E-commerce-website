document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const msg = document.getElementById("contact-msg");

  if (!name || !email || !message) {
    msg.textContent = "Please fill in all fields.";
    msg.classList.remove("hidden");
    msg.style.color = "red";
    return;
  }

  // Fake send
  msg.textContent = `Thank you, ${name}! Your message has been sent.`;
  msg.classList.remove("hidden");
  msg.style.color = "green";

  this.reset();
});
