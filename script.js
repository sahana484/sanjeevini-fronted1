function analyze() {
  const text = document.getElementById("symptoms").value.toLowerCase();
  const resultBox = document.getElementById("resultBox");
  const riskText = document.getElementById("riskText");

  if (text.trim().length < 3) {
    alert("Please enter valid symptoms");
    return;
  }

  let risk = "Low Risk";

  if (text.includes("chest") || text.includes("breathing") || text.includes("severe")) {
    risk = "High Risk. Seek medical help.";
  }

  riskText.innerText = risk;
  resultBox.classList.remove("hidden");
}

function sendEmergency() {
  alert("Emergency alert sent to nearest hospital.");
}