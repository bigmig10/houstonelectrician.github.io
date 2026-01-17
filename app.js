// app.js — endpoint not live yet

const form = document.getElementById("intakeForm");
const statusMsg = document.getElementById("statusMsg");
const submitBtn = document.getElementById("submitBtn");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    submitBtn.disabled = true;

    statusMsg.textContent =
      "Intake submissions open shortly. This site is in final setup. Please check back soon.";

    // Optional: re-enable after delay
    setTimeout(() => {
      submitBtn.disabled = false;
    }, 4000);
  });
}
