import { CharacterCard } from "./components/CharacterCard/CharacterCard.js";

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

// States
const maxPage = 1;
const page = 1;
const searchQuery = "";

async function fetchCharacters() {
  cardContainer.innerHTML = "";
  const endpoint = "https://rickandmortyapi.com/api/character?page=1";
  const response = await fetch(endpoint);
  const data = await response.json();
  const characters = data.results;
  characters.forEach((character) => {
    const src = character.image;
    const name = character.name;
    const status = character.status;
    const type = character.type;
    const occ = character.episode.length;
    const newCharacterCard = CharacterCard(src, name, status, type, occ);
    cardContainer.append(newCharacterCard);
  });
}

fetchCharacters();
