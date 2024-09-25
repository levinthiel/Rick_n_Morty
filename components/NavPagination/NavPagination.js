const navigation = document.querySelector('[data-js="navigation"]');

export function generatePagi() {
  const newPagi = document.createElement("SPAN");
  newPagi.classList.add("navigation__pagination");
  newPagi.setAttribute("data-js", "pagination");
  newPagi.textContent = "1 / 1";
  navigation.append(newPagi);
}
