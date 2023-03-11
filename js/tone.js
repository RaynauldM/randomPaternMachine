let optionsToggle = true;

const toneBtn = document.getElementById("toneBtn");

const toneArray = [
  "A",
  "Bb",
  "B",
  "C",
  "Db",
  "D",
  "Eb",
  "E",
  "F",
  "Gb",
  "G",
  "Ab",
];

let noFlatArray = [];
let flatArray = [];

toneArray.forEach((e) => {
  if (!e.includes("b")) {
    noFlatArray.push(e);
  } else {
    flatArray.push(e);
  }
});

let chosenArray = toneArray;

function flatOrNotName() {
  switch (chosenArray) {
    case toneArray:
      return "All tones";
      break;
    case flatArray:
      return "Only flats";
      break;
    case noFlatArray:
      return "No flats";
      break;
  }
}

function toneOutput() {
  document.getElementById("outputTone").textContent =
    chosenArray[Math.floor(Math.random() * chosenArray.length)];
}

function changeFlatOrNot() {
  switch (chosenArray) {
    case toneArray:
      chosenArray = flatArray;
      changeName();
      break;
    case flatArray:
      chosenArray = noFlatArray;
      changeName();
      break;
    case noFlatArray:
      chosenArray = toneArray;
      changeName();
      break;
  }
}

function changeName() {
  document.getElementById("flatOrNotBtn").textContent = flatOrNotName();
}

function handleClick() {
  const toneContainer = document.getElementById("toneContainer");
  function toggleFalse() {
    toneContainer.textContent = "";
    optionsToggle = true;
    toneContainer.append(toneBtn);
  }
  function toggleTrue() {
    const flatOrNotBtn = document.createElement("button");
    flatOrNotBtn.id = "flatOrNotBtn";
    flatOrNotBtn.className = "optionsBtns";
    flatOrNotBtn.addEventListener("click", changeFlatOrNot);
    flatOrNotBtn.textContent = flatOrNotName();
    let flatOrNotLabel = document.createElement("LABEL");
    flatOrNotLabel.className = "optionsLabels";
    flatOrNotLabel.for = "flatOrNotBtn";
    flatOrNotLabel.textContent = "You want the tones flat or not: ";
    let optionsContainer = document.createElement("div");
    optionsContainer.id = "optionsToneContainer";
    optionsContainer.className = "optionsContainers";
    optionsContainer.append(flatOrNotLabel);
    optionsContainer.append(flatOrNotBtn);
    toneContainer.append(optionsContainer);
    optionsToggle = false;
  }
  optionsToggle ? toggleTrue() : toggleFalse();
}

export { chosenArray, toneArray, toneOutput, handleClick };
