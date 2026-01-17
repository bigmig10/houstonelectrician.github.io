// app.js
const ENDPOINT_URL = "PASTE_YOUR_MAKE_WEBHOOK_URL_HERE";

const form = document.getElementById("intakeForm");
const statusMsg = document.getElementById("statusMsg");
const submitBtn = document.getElementById("submitBtn");

function setStatus(msg) {
  if (statusMsg) statusMsg.textContent = msg;
}

if (form) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    submitBtn.disabled = true;
    setStatus("Submitting...");

    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const res = await fetch(https://hook.us2.make.com/urgf2v93a1scz1j4ltv7pl8emypspxj2), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Submit failed");

      const name = encodeURIComponent(payload.name || "");
      window.location.href = `confirmation.html?name=${name}`;
    } catch (err) {
      setStatus("Submit failed. Please try again.");
      submitBtn.disabled = false;
    }
  });
}

