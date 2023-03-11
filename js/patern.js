let optionsToggle = true;
let amountOfSteps = 4;

const paternBtn = document.getElementById("paternBtn");

function getPatern(amount) {
  let paternArray = [];
  let paternString = "";
  for (let i = 0; i < amount; i++) {
    paternArray.push(Math.floor(Math.random() * 7 + 1));
  }
  paternArray.forEach((e) => (paternString += `-${e.toString()}`));
  paternString += "-";
  return paternString;
}

function paternOutput() {
  document.getElementById("outputPatern").textContent =
    getPatern(amountOfSteps);
}

function changeHowMany() {
  if (amountOfSteps === 3) {
    amountOfSteps = 4;
    document.getElementById("howManyBtn").textContent = amountOfSteps;
  } else {
    amountOfSteps = 3;
    document.getElementById("howManyBtn").textContent = amountOfSteps;
  }
}

function handleClick() {
  const paternContainer = document.getElementById("paternContainer");
  function toggleFalse() {
    paternContainer.textContent = "";
    optionsToggle = true;
    paternContainer.append(paternBtn);
  }
  function toggleTrue() {
    const howManyBtn = document.createElement("button");
    howManyBtn.id = "howManyBtn";
    howManyBtn.className = "optionsBtns";
    howManyBtn.addEventListener("click", changeHowMany);
    howManyBtn.textContent = amountOfSteps;
    let howManyLabel = document.createElement("LABEL");
    howManyLabel.className = "optionsLabels";
    howManyLabel.for = "howManyBtn";
    howManyLabel.textContent = "How many steps: ";
    let optionsContainer = document.createElement("div");
    optionsContainer.id = "optionsPaternContainer";
    optionsContainer.className = "optionsContainers";
    optionsContainer.append(howManyLabel);
    optionsContainer.append(howManyBtn);
    paternContainer.append(optionsContainer);
    optionsToggle = false;
  }
  optionsToggle ? toggleTrue() : toggleFalse();
}

export { getPatern, paternOutput, handleClick };
