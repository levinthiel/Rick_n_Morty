import { CharacterCard } from "./components/CharacterCard/CharacterCard.js";
import { generateButtons } from "./components/NavButton/NavButton.js";
import { generateSearchBar } from "./components/SearchBar/SearchBar.js";

generateButtons();
generateSearchBar();

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);

const pagination = document.querySelector('[data-js="pagination"]');

// States
let searchQuery = "";
let pageIndex = 1;
let pageNumber = "";
let endpoint = `https://rickandmortyapi.com/api/character`;

// ?page=${pageIndex}
async function fetchCharacters() {
  cardContainer.innerHTML = "";

  const fullUrl = `${endpoint}?page=${pageIndex}&name=${searchQuery}`;

  const response = await fetch(fullUrl);
  const data = await response.json();
  const characters = data.results;
  pageNumber = data.info.pages;

  pagination.textContent = ` ${pageIndex} / ${pageNumber} `;
  // console.log(characters);

  characters.forEach((character) => {
    //create character
    const src = character.image;
    const name = character.name;
    const status = character.status;
    const type = character.type;
    const occ = character.episode.length;
    const newCharacterCard = CharacterCard(src, name, status, type, occ);
    cardContainer.append(newCharacterCard);
  });
}

const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');

prevButton.addEventListener("click", () => {
  if (pageIndex > 1) {
    pageIndex--;
    fetchCharacters();
  } else {
    console.log("Page 0 lies in another dimension");
  }
});

nextButton.addEventListener("click", () => {
  if (pageIndex < pageNumber) {
    pageIndex++;
    fetchCharacters();
  } else {
    console.log(`The page lies in another dimension`);
  }
});

fetchCharacters();

searchBar.addEventListener("submit", (event) => {
  event.preventDefault();
  const searchInput = document.querySelector("input");
  searchQuery = searchInput.value;
  fetchCharacters();
});

// function generateButton() {

// }
