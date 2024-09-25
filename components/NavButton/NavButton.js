import { generatePagi } from "../NavPagination/NavPagination.js";

const navigation = document.querySelector('[data-js="navigation"]');

export function generateButtons() {
  const prevButton = document.createElement("button");
  prevButton.classList.add("button");
  prevButton.classList.add("button--prev");
  prevButton.setAttribute("data-js", "button-prev");
  prevButton.textContent = "previous";
  navigation.append(prevButton);

  generatePagi();

  const nextButton = document.createElement("button");
  nextButton.classList.add("button");
  nextButton.classList.add("button--next");
  nextButton.setAttribute("data-js", "button-next");
  nextButton.textContent = "next";
  navigation.append(nextButton);
}
