// app.js
const ENDPOINT_URL = "YOUR_ENDPOINT_URL_HERE"; // e.g., Formspree, Make.com webhook, Zapier webhook

const form = document.getElementById("intakeForm");
const statusMsg = document.getElementById("statusMsg");
const submitBtn = document.getElementById("submitBtn");

function setStatus(msg) {
  statusMsg.textContent = msg;
}

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  submitBtn.disabled = true;
  setStatus("Submitting...");

  const formData = new FormData(form);
  const payload = Object.fromEntries(formData.entries());

  try {
    const res = await fetch(ENDPOINT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!res.ok) throw new Error("Submit failed");

    // Redirect to confirmation page (optionally pass name)
    const name = encodeURIComponent(payload.name || "");
    window.location.href = `confirmation.html?name=${name}`;
  } catch (err) {
    setStatus("Submit failed. Please try again or message us.");
    submitBtn.disabled = false;
  }
});
