const noteArea = document.getElementById("noteArea");

document.getElementById("fontSelect").addEventListener("change", function() {
  noteArea.style.fontFamily = this.value;
});

function highlightText() {
  const color = document.getElementById("highlightColor").value;
  document.execCommand("hiliteColor", false, color);
}

function addImage(event) {
  const img = document.createElement("img");
  img.src = URL.createObjectURL(event.target.files[0]);
  img.style.maxWidth = "200px";
  noteArea.appendChild(img);
}

function changeBackground() {
  const colors = ["#fde2e8", "#fff0f5", "#fce4ec"];
  document.body.style.background =
    colors[Math.floor(Math.random() * colors.length)];
}

function makeFlashcards() {
  const text = noteArea.innerText;
  const points = text.split(".").slice(0, 5);
  document.getElementById("output").innerHTML =
    "<h3>Flashcards 🌸</h3>" +
    points.map(p => `<div>📌 ${p}</div>`).join("");
}

function simplifyNotes() {
  const text = noteArea.innerText;
  document.getElementById("output").innerHTML =
    "<h3>Simplified Notes ✨</h3><p>" +
    text.split(" ").slice(0, 40).join(" ") +
    "...</p>";
}