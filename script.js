const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");
const textElement = document.getElementById("step-text");

let currentActive = 1;

next.addEventListener("click", () => {
  currentActive++;

  if (currentActive > circles.length) {
    currentActive = circles.length;
  }

  update();
});

prev.addEventListener("click", () => {
  currentActive--;

  if (currentActive < 1) {
    currentActive = 1;
  }

  update();
});

function update() {
  circles.forEach((circle, idx) => {
    if (idx < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  const actives = document.querySelectorAll(".active");

  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + "%";

  if (currentActive === 1) {
    prev.disabled = true;
  } else if (currentActive === circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }

  displayStepText(currentActive);
}

function displayStepText(step) {
  let text = "";
  switch (step) {
    case 1:
      text = "Country Name: Bangladesh";
      break;
    case 2:
      text =
        "Capital and Largest City: Dhaka";
      break;
    case 3:
      text =
        "Population: Over 160 million people";
      break;
    case 4:
      text = "Language: Bengali (Bangla)";
      break;
    default:
      text = "";
  }

  textElement.innerHTML = text; // Update the text element
}

update();
