import { generatePagi } from "../NavPagination/NavPagination.js";

const navigation = document.querySelector('[data-js="navigation"]');

function prevButton() {
  const prevButton = document.createElement("button");
  prevButton.classList.add("button");
  prevButton.classList.add("button--prev");
  prevButton.setAttribute("data-js", "button-prev");
  prevButton.textContent = "previous";
  return prevButton;
}

function nextButton() {
  const nextButton = document.createElement("button");
  nextButton.classList.add("button");
  nextButton.classList.add("button--next");
  nextButton.setAttribute("data-js", "button-next");
  nextButton.textContent = "next";
  return nextButton;
}

export function generateButtons() {
  const newPrevButton = prevButton();
  navigation.append(newPrevButton);
  generatePagi();
  const newNextButton = nextButton();
  navigation.append(newNextButton);
}
