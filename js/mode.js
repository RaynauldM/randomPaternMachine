let modeBtn = document.getElementById("modeBtn");
let optionsToggle = true;

const majorModesArray = [
  "Ionian",
  "Dorian",
  "Phryginan",
  "Lydian",
  "Mixolydian",
  "Aeolian",
  "Locrian",
];

const melodicMinorModesArray = [
  "Melodic minor Scale",
  "Dorian b2",
  "Lydian Augmented",
  "Lydian Dominant",
  "Mixolydian b6",
  "Aeolian b5",
  "Super Locrian",
];

const harmonicMinorModesArray = [
  "Harmonic minor",
  "Locrian #6",
  "Ionian #5",
  "Dorian #4",
  "Phrygian Dominant",
  "Lydian #2",
  "Super Locrian bb7",
];

const exoticModesArray = [
  "Indian Scale",
  "Japanese Scale",
  "Gipsy Hungarian Scale",
  "Neapolitan Scale",
  "Persian Scale",
  "Jewish Scale",
  "Bizantine Scale",
  "Arabic Scale",
];

const allModesArray = [
  ...majorModesArray,
  ...melodicMinorModesArray,
  ...harmonicMinorModesArray,
  ...exoticModesArray,
];

let chosenMode = majorModesArray;

function modeOutput() {
  document.getElementById("outputMode").textContent =
    chosenMode[Math.floor(Math.random() * chosenMode.length)];
}

function getChosenModeName() {
  switch (chosenMode) {
    case majorModesArray:
      return "Major";
      break;
    case melodicMinorModesArray:
      return "Melodic minor";
      break;
    case harmonicMinorModesArray:
      return "Harmonic minor";
      break;
    case exoticModesArray:
      return "Exotic";
      break;
    case allModesArray:
      return "All";
      break;
  }
}

function handleClick() {
  const modeContainer = document.getElementById("modeContainer");
  function toggleFalse() {
    modeContainer.textContent = "";
    optionsToggle = true;
    modeContainer.append(modeBtn);
  }
  function toggleTrue() {
    const whichModeBtn = document.createElement("button");
    whichModeBtn.id = "whichModeBtn";
    whichModeBtn.className = "optionsBtns";
    whichModeBtn.addEventListener("click", changeMode);
    whichModeBtn.textContent = getChosenModeName();
    let whichLabel = document.createElement("LABEL");
    whichLabel.className = "optionsLabels";
    whichLabel.for = "whichModeBtn";
    whichLabel.textContent = "Change mode list: ";
    let optionsContainer = document.createElement("div");
    optionsContainer.id = "optionsModeContainer";
    optionsContainer.className = "optionsContainers";
    optionsContainer.append(whichLabel);
    optionsContainer.append(whichModeBtn);
    modeContainer.append(optionsContainer);
    optionsToggle = false;
  }
  optionsToggle ? toggleTrue() : toggleFalse();
}

function changeMode() {
  switch (chosenMode) {
    case majorModesArray:
      chosenMode = melodicMinorModesArray;
      whichModeBtn.textContent = getChosenModeName();
      break;
    case melodicMinorModesArray:
      chosenMode = harmonicMinorModesArray;
      whichModeBtn.textContent = getChosenModeName();
      break;
    case harmonicMinorModesArray:
      chosenMode = exoticModesArray;
      whichModeBtn.textContent = getChosenModeName();
      break;
    case exoticModesArray:
      chosenMode = allModesArray;
      whichModeBtn.textContent = getChosenModeName();
      break;
    case allModesArray:
      chosenMode = majorModesArray;
      whichModeBtn.textContent = getChosenModeName();
      break;
  }
}

export {
  majorModesArray,
  melodicMinorModesArray,
  harmonicMinorModesArray,
  exoticModesArray,
  allModesArray,
  handleClick,
  modeOutput,
};
