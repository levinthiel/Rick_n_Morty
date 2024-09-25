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

let pageIndex = 1;


async function fetchCharacters() {
  cardContainer.innerHTML = "";

  const endpoint = `https://rickandmortyapi.com/api/character?page=${pageIndex}`;

  const response = await fetch(endpoint);
  const data = await response.json();
  const characters = data.results;
  const pageNumber = data.info.pages;

  pagination.textContent = ` ${pageIndex} / ${pageNumber} `
  console.log(characters);

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

nextButton.addEventListener ("click", ()=> {
    pageIndex++  
    fetchCharacters();
})

prevButton.addEventListener ("click", ()=> {
  if (pageIndex > 1) {
  pageIndex--  
  fetchCharacters();
  }else{
    console.log("Page 0 lies in another dimension")
  }
})

fetchCharacters(); 
