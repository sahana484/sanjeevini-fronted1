function analyze() {
  const text = document.getElementById("symptoms").value;

  if (text.length < 5) {
    alert("Please enter symptoms");
    return;
  }

  let risk = "Low Risk";

  if (text.toLowerCase().includes("chest") ||
      text.toLowerCase().includes("breath")) {
    risk = "High Risk. Consult doctor.";
  }

  document.getElementById("riskText").innerText = risk;
  document.getElementById("resultCard").classList.remove("hidden");
}

function sendEmergency() {
  alert("Emergency alert sent to nearest health worker.");
}