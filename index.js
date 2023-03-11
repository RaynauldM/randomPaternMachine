import * as mode from "./js/mode.js";
import * as patern from "./js/patern.js";
import * as tone from "./js/tone.js";

const main = document.querySelector("main");
const btns = main.getElementsByClassName("btns");
const outputs = main.getElementsByClassName("outputDisplay");

function handleClick(event) {
  const { id } = event.target;
  switch (id) {
    case "outputModeBtn":
      mode.modeOutput();
      break;
    case "outputPaternBtn":
      patern.paternOutput();
      break;
    case "outputToneBtn":
      tone.toneOutput();
      break;
    case "modeBtn":
      mode.handleClick();
      break;
    case "paternBtn":
      patern.handleClick();
      break;
    case "toneBtn":
      tone.handleClick();
  }
}

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", handleClick);
}

for (let i = 0; i < outputs.length; i++) {
  outputs[i].textContent = "---";
}
